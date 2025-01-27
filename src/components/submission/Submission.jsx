function Submission({ submission }) {
  return (
    <div className="h-[80vh] rounded-lg bg-white p-4 shadow-md">
      <pre className="whitespace-pre-wrap break-words">{submission?.code}</pre>
    </div>
  );
}

export default Submission;
