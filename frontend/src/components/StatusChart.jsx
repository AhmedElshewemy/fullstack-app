import React from 'react';

// Helper to get status counts
function getStatusCounts(notes) {
  const counts = { active: 0, completed: 0, archived: 0 };
  notes.forEach(note => {
    if (counts[note.status] !== undefined) {
      counts[note.status]++;
    }
  });
  return counts;
}

// Pie chart colors for each status
const STATUS_COLORS = {
  active: '#4a90e2',
  completed: '#50e3c2',
  archived: '#bfc0c0',
};

export default function StatusChart({ notes }) {
  const counts = getStatusCounts(notes);
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  if (total === 0) return <div className="status-chart-empty">No notes yet</div>;

  // Pie chart math
  let startAngle = 0;
  const radius = 40;
  const center = 50;
  const pieData = Object.entries(counts).map(([status, count]) => {
    const value = count / total;
    const angle = value * 360;
    const endAngle = startAngle + angle;
    const largeArc = angle > 180 ? 1 : 0;
    // Convert angles to radians
    const startRad = (Math.PI / 180) * startAngle;
    const endRad = (Math.PI / 180) * endAngle;
    // SVG arc
    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);
    const path = `M${center},${center} L${x1},${y1} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`;
    const result = {
      status,
      path,
      color: STATUS_COLORS[status],
      count,
    };
    startAngle = endAngle;
    return result;
  });

  return (
    <div className="status-chart">
      <svg width="100" height="100" viewBox="0 0 100 100">
        {pieData.map(
          (slice, i) =>
            slice.count > 0 && (
              <path
                key={slice.status}
                d={slice.path}
                fill={slice.color}
                stroke="#fff"
                strokeWidth="2"
              />
            )
        )}
      </svg>
      <div className="status-legend">
        {Object.keys(counts).map((status) => (
          <div key={status} className="legend-item">
            <span
              className="legend-color"
              style={{ background: STATUS_COLORS[status] }}
            />
            {status.charAt(0).toUpperCase() + status.slice(1)}: {counts[status]}
          </div>
        ))}
      </div>
    </div>
  );
}
