export default function ResultsDisplay({ results, loading }) {
  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!results?.issues?.length) {
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-gray-500">No results found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.issues.map((issue) => (
        <div key={issue.id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">{issue.fields.summary}</h3>
            <span className={`px-2 py-1 rounded text-sm ${
              issue.fields.priority.name === 'High' 
                ? 'bg-red-100 text-red-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {issue.fields.priority.name}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
            <div>
              <span className="font-medium">Status:</span> {issue.fields.status.name}
            </div>
            <div>
              <span className="font-medium">Assignee:</span> {issue.fields.assignee?.displayName || 'Unassigned'}
            </div>
            <div>
              <span className="font-medium">Created:</span> {new Date(issue.fields.created).toLocaleDateString()}
            </div>
            <div>
              <span className="font-medium">Updated:</span> {new Date(issue.fields.updated).toLocaleDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}