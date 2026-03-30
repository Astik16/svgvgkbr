import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application error boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-[#0d0d1a] text-[#f0ead6] flex items-center justify-center px-4">
          <div className="max-w-xl w-full glass-card border border-[#C9A84C]/30 rounded-xl p-8 text-center">
            <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-semibold mb-3">★ Техническое сообщение ★</p>
            <h1 className="text-3xl font-bold text-white mb-4">Сайт временно перезагружается</h1>
            <p className="text-[#f0ead6]/80 text-sm leading-relaxed mb-6">
              Произошла непредвиденная ошибка интерфейса. Пожалуйста, обновите страницу через несколько секунд.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#C9A84C] text-[#0d0d1a] font-bold rounded tracking-wider hover:bg-[#f5d98b] transition-colors"
            >
              Обновить страницу
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
