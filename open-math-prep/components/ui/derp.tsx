"use client";
import {
  Brain,
  CheckCircle2,
  Heart,
  Smile,
  TrendingUp,
  Users,
} from "lucide-react";

const MetricCategory = ({ icon: Icon, title, metrics }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="mr-2 text-blue-500" size={24} />
      <h2 className="text-xl font-semibold text-black">{title}</h2>
    </div>
    <ul className="pl-6 list-disc">
      {metrics.map((metric, index) => (
        <li key={index} className="mb-2">
          {metric}
        </li>
      ))}
    </ul>
  </div>
);

const ImpactMetrics = () => {
  const categories = [
    {
      icon: CheckCircle2,
      title: "Attendance and Engagement",
      metrics: [
        "School attendance rates",
        "Extracurricular activity participation",
        "Homework completion rates",
      ],
    },
    {
      icon: Heart,
      title: "Mental Health and Well-being",
      metrics: [
        "Reduction in depressive symptoms",
        "Improved self-esteem scores",
        "Decreased anxiety levels",
      ],
    },
    {
      icon: Users,
      title: "Social Skills and Relationships",
      metrics: [
        "Peer relationship quality",
        "Family relationship improvements",
        "Conflict resolution skills",
      ],
    },
    {
      icon: Brain,
      title: "Cognitive and Executive Function",
      metrics: [
        "Improved attention span",
        "Enhanced organizational skills",
        "Better time management",
      ],
    },
    {
      icon: Smile,
      title: "Behavioral Improvements",
      metrics: [
        "Reduced disciplinary incidents",
        "Increased positive behaviors",
        "Improved impulse control",
      ],
    },
    {
      icon: TrendingUp,
      title: "Long-term Outcomes",
      metrics: [
        "High school graduation rates",
        "Post-secondary education enrollment",
        "Employment rates post-intervention",
      ],
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-center text-black">
        Impact Metrics Beyond Test Scores
      </h1>
      <div className="grid grid-cols-1 gap-6 text-black  md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <MetricCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default ImpactMetrics;
