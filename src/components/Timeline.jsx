import React from 'react';
import './Timeline.css';

function Timeline() {
  return (
    <div className="timeline">
      <h2>Hành trình phát triển</h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <h3>2019</h3>
          <p>Ý tưởng ra đời.</p>
        </div>
        <div className="timeline-item">
          <h3>2020</h3>
          <p>Thử nghiệm công nghệ ZoomX.</p>
        </div>
        <div className="timeline-item">
          <h3>2021</h3>
          <p>Ra mắt thế hệ đầu tiên.</p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
