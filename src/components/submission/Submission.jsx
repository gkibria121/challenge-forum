function Submission({ submission }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <pre className="whitespace-pre-wrap break-words">{submission?.code}</pre>
    </div>
  );
}

export default Submission;
