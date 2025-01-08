// SubmissionEditor.jsx
const SubmissionEditor = ({ onCancel, onSave }) => (
    <div className="submission__content">
      <select name="language" id="language" className="selection">
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="java">Java</option>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
      </select>
      <textarea
        name="submission"
        id="submission"
        className="submission__input"
        defaultValue={"this..."}
      />
      <div className="submission__actions">
        <button className="btn btn--add" onClick={onSave}>
          Save
        </button>
        <button className="btn btn--back" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );

export default SubmissionEditor;