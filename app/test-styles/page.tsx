export default function TestStylesPage() {
  return (
    <div className="min-h-screen bg-primary-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-primary-600 mb-4">
          Тест стилей Tailwind CSS
        </h1>
        <p className="text-secondary-600 mb-4">
          Если вы видите синий фон и белую карточку с тенью, значит Tailwind CSS работает!
        </p>
        <div className="flex space-x-4">
          <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors">
            Primary Button
          </button>
          <button className="bg-success-600 text-white px-4 py-2 rounded hover:bg-success-700 transition-colors">
            Success Button
          </button>
        </div>
      </div>
    </div>
  )
}
