import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              הפותר
            </h1>
            <p className="text-lg text-gray-600">
              סוגרים לך פינה בעבודות עיצוב ותוכן דחופות
            </p>
          </header>
          
          <main className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                ברוכים הבאים!
              </h2>
              <p className="text-gray-600 leading-relaxed">
                אנחנו מספקים פתרונות עיצוב, מחקר, תוכן ואנליזה מהירים ואיכותיים 
                באמצעות טכנולוגיית AI מתקדמת.
              </p>
            </div>
          </main>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default App