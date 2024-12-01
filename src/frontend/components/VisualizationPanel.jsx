import { BarChart2, PieChart } from 'lucide-react';

export default function VisualizationPanel({ data }) {
  if (!data?.issues?.length) return null;

  // Calculate statistics
  const stats = data.issues.reduce((acc, issue) => {
    // Count by priority
    const priority = issue.fields.priority.name;
    acc.priorities[priority] = (acc.priorities[priority] || 0) + 1;

    // Count by status
    const status = issue.fields.status.name;
    acc.statuses[status] = (acc.statuses[status] || 0) + 1;

    return acc;
  }, { priorities: {}, statuses: {} });

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <BarChart2 className="mr-2" /> Priority Distribution
        </h3>
        <div className="space-y-2">
          {Object.entries(stats.priorities).map(([priority, count]) => (
            <div key={priority} className="flex items-center">
              <span className="w-24 text-sm">{priority}</span>
              <div className="flex-1 h-4 bg-gray-100 rounded overflow-hidden">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${(count / data.issues.length) * 100}%` }}
                />
              </div>
              <span className="w-12 text-right text-sm">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <PieChart className="mr-2" /> Status Breakdown
        </h3>
        <div className="space-y-2">
          {Object.entries(stats.statuses).map(([status, count]) => (
            <div key={status} className="flex items-center">
              <span className="w-24 text-sm">{status}</span>
              <div className="flex-1 h-4 bg-gray-100 rounded overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${(count / data.issues.length) * 100}%` }}
                />
              </div>
              <span className="w-12 text-right text-sm">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}