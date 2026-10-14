import React from 'react'

export default function Page() {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <ul id="list" style={{ listStyle: "none", padding: 0 }}></ul>
      <form id="task-form">
        <input type="text" id="task-title" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}