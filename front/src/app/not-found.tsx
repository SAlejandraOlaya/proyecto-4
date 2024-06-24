import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-8">La página que solicistaste no fue encontrada.</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Regresar al inicio
      </Link>
    </div>
  );
};

export default NotFound;