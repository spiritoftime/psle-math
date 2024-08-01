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

type BranchData = {
  id: string;
  label: string;
  calculation?: string;
  children?: BranchData[];
};

type BranchDiagramProps = {
  data: BranchData;
  options?: {
    nodeSpacing?: number;
    levelSpacing?: number;
    nodeColor?: string;
    edgeColor?: string;
    textColor?: string;
  };
};
const defaultOptions = {
  nodeSpacing: 250,
  levelSpacing: 450,
  nodeColor: "#ffffff",
  edgeColor: "#888",
  textColor: "#333333",
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
  level = 0
): { nodes: Node[]; edges: Edge[]; height: number } => {
  const nodes: Node[] = [
    {
      id: data.id,
      position: { x, y },
      data: { label: data.label },
      style: {
        background: options.nodeColor,
        border: "1px solid #ccc",
        padding: 10,
        borderRadius: 8,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        width: 80,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "8px",
        fontWeight: "bold",
        color: options.textColor,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  ];
  const edges: Edge[] = [];
  let totalHeight = 40; // Height of the current node

  if (data.children) {
    const childResults = data.children.map((child) =>
      createNodesAndEdges(
        child,
        options,
        x + options.levelSpacing,
        0, // We'll adjust this later
        level + 1
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

  return { nodes, edges, height: totalHeight };
};
export const BranchDiagram: React.FC<BranchDiagramProps> = ({
  data,
  options = {},
}) => {
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  } as typeof defaultOptions;
  const { nodes, edges } = useMemo(
    () => createNodesAndEdges(data, mergedOptions),
    [data, mergedOptions]
  );

  const edgeTypes = {
    custom: CustomEdge,
  };

  return (
    <div style={{ width: "100%", height: "400px", background: "#1a1a1a" }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          edgeTypes={edgeTypes}
          fitView
          minZoom={0.1}
          maxZoom={1.5}
          defaultViewport={{ x: 0, y: 0, zoom: 0.7 }} // Decreased default zoom
          attributionPosition="bottom-left"
        >
          <Background
            color="#444"
            variant={BackgroundVariant.Dots}
            gap={12}
            size={1}
          />
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
