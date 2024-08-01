"use client";
import React, { useMemo } from "react";
import {
  Node,
  ReactFlow,
  Edge,
  Background,
  Controls,
  BackgroundVariant,
  Position,
  ReactFlowProvider,
  EdgeProps,
  getBezierPath,
  EdgeLabelRenderer,
  BaseEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export type BranchData = {
  id: string;
  label: string;
  calculation?: string;
  children?: BranchData[];
};

export type BranchDiagramProps = {
  data: BranchData;
  options?: {
    nodeSpacing?: number;
    levelSpacing?: number;
    nodeColor?: string;
    edgeColor?: string;
    textColor?: string;
    style?: React.CSSProperties;
  };
};
const nodeHeight = 40;
const defaultOptions = {
  nodeSpacing: 100,
  levelSpacing: 200,
  nodeColor: "#ffffff",
  textColor: "#000000",
  edgeColor: "#888888",
  style: {
    border: "1px solid #ccc",
    padding: 10,
    borderRadius: 8,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: 80,
    height: nodeHeight,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "8px",
    fontWeight: "bold",
  },
};

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
}: EdgeProps) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={style} />
      {data && data.label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              background: "transparent",
              padding: 10,
              borderRadius: 5,
              fontSize: 12,
              fontWeight: 700,
              pointerEvents: "all",
            }}
          >
            <InlineMath math={data.label as string} />
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

const createNodesAndEdges = (
  data: BranchData,
  options: typeof defaultOptions,
  x = 0,
  y = 0,
  level = 0,
  memoizedCalculation: Map<
    string,
    { height: number; nodes: Node[]; edges: Edge[] }
  > = new Map()
): { nodes: Node[]; edges: Edge[]; height: number } => {
  // Check if this subtree has already been processed
  if (memoizedCalculation.has(data.id)) {
    const cachedResult = memoizedCalculation.get(data.id)!;
    // Adjust positions based on the new x and y
    const adjustedNodes = cachedResult.nodes.map((node) => ({
      ...node,
      position: {
        x: node.position.x - cachedResult.nodes[0].position.x + x,
        y: node.position.y - cachedResult.nodes[0].position.y + y,
      },
    }));
    return { ...cachedResult, nodes: adjustedNodes };
  }

  const mergedStyles = { ...defaultOptions.style, ...options.style };
  const nodes: Node[] = [
    {
      id: data.id,
      position: { x, y },
      data: { label: data.label },
      style: {
        ...mergedStyles,
        background: options.nodeColor,
        color: options.textColor,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  ];
  const edges: Edge[] = [];
  let totalHeight = nodeHeight; // Height of the current node

  if (data.children) {
    const childResults = data.children.map((child) =>
      createNodesAndEdges(
        child,
        options,
        x + options.levelSpacing,
        0,
        level + 1,
        memoizedCalculation
      )
    );

    // Calculate total height of all children
    const totalChildrenHeight = childResults.reduce(
      (sum, result) => sum + result.height,
      0
    );
    const spacingHeight = (childResults.length - 1) * options.nodeSpacing;
    totalHeight = Math.max(totalHeight, totalChildrenHeight + spacingHeight);

    // Distribute children vertically
    let currentChildY = y - totalHeight / 2 + 20; // Start from the top, considering parent node height
    childResults.forEach((childResult, index) => {
      // Adjust the y positions of the child and its descendants
      const yOffset = currentChildY - childResult.nodes[0].position.y;
      childResult.nodes.forEach((node) => {
        node.position.y += yOffset;
      });

      nodes.push(...childResult.nodes);
      edges.push({
        id: `${data.id}-${data.children![index].id}`,
        source: data.id,
        target: data.children![index].id,
        type: "custom",
        data: { label: data.children![index].calculation },
        style: { stroke: options.edgeColor },
      });
      edges.push(...childResult.edges);

      currentChildY += childResult.height + options.nodeSpacing;
    });

    // Center the parent node
    nodes[0].position.y = y;
  }

  const result = { nodes, edges, height: totalHeight };
  memoizedCalculation.set(data.id, result);
  return result;
};

export const BranchDiagram: React.FC<BranchDiagramProps> = ({
  data,
  options = {},
}) => {
  const mergedOptions = {
    ...defaultOptions,
    ...options,
    style: { ...defaultOptions.style, ...options.style },
  } as typeof defaultOptions;
  const { nodes, edges } = useMemo(
    () => createNodesAndEdges(data, mergedOptions),
    [data, mergedOptions]
  );

  const edgeTypes = {
    custom: CustomEdge,
  };

  return (
    <div className="w-full h-[400px] mx-auto">
      <ReactFlowProvider>
        <ReactFlow
          colorMode="dark"
          nodes={nodes}
          edges={edges}
          edgeTypes={edgeTypes}
          fitView
          minZoom={0.1}
          maxZoom={1.5}
          attributionPosition="top-right"
        >
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

// Example usage
export const exampleData: BranchData = {
  id: "1",
  label: "Total",
  children: [
    {
      id: "2",
      label: "Books",
      calculation: "\\frac{3}{5}",
    },
    {
      id: "3",
      label: "Remainder",
      calculation: "1 - \\frac{3}{5} = \\frac{2}{5}",
      children: [
        {
          id: "4",
          label: "Wallet",
          calculation: "\\frac{1}{3}",
        },
        {
          id: "5",
          label: "Leftover",
          calculation: "1 - \\frac{1}{3} = \\frac{2}{3}",
        },
      ],
    },
  ],
};
export const exampleData2: BranchData = {
  id: "1",
  label: "Total Books",
  children: [
    {
      id: "2",
      label: "English Books",
      calculation: "\\frac{5}{8}",
      children: [
        {
          id: "3",
          label: "Fiction Books",
          calculation: "\\frac{1}{2} \\times \\frac{5}{8} = \\frac{5}{16}",
        },
        {
          id: "4",
          label: "Non-Fiction Books",
          calculation: "\\frac{1}{2} \\times \\frac{5}{8} = \\frac{5}{16}",
        },
      ],
    },
    {
      id: "5",
      label: "Non-English Books",
      calculation: "1 - \\frac{5}{8} = \\frac{3}{8}",
      children: [
        {
          id: "6",
          label: "Fiction Non English Books",
          calculation: "\\frac{1}{2} \\times \\frac{5}{8} = \\frac{5}{16}",
        },
        {
          id: "7",
          label: "Non-Fiction Non English Books",
          calculation: "\\frac{1}{2} \\times \\frac{5}{8} = \\frac{5}{16}",
        },
      ],
    },
  ],
};
