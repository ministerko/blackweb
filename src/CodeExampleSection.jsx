export default function CodeExampleSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Code Example</h2>
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <pre className="overflow-auto">
          <code className="language-js">
            {`const blackChat = () => {
  return (
    <div>
      <h1>Secure Messaging</h1>
      <p>Your privacy matters.</p>
    </div>
  );
};`}
          </code>
        </pre>
        <button
          className="mt-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
          onClick={() => navigator.clipboard.writeText('const blackChat...')}
        >
          Copy Code
        </button>
      </div>
    </section>
  );
}
