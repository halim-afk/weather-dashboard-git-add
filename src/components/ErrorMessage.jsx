function ErrorMessage({ message }) {
  return (
    <div className="bg-red-200 text-red-800 p-2 rounded mb-4">
      {message}
    </div>
  );
}

export default ErrorMessage;
