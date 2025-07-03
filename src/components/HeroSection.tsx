import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-record-purple/10 via-record-magenta/10 to-record-orange/10 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D946EF" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat text-gray-900 mb-6 leading-tight">
            Мировые рекорды
            <br />
            <span className="bg-gradient-to-r from-record-purple via-record-magenta to-record-orange bg-clip-text text-transparent">
              в одном месте
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-opensans">
            Платформа для регистрации, проверки и признания уникальных достижений в спорте, науке и творчестве
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-record-purple to-record-magenta hover:from-record-purple/90 hover:to-record-magenta/90 text-white font-opensans text-lg px-8 py-4">
              <Icon name="Plus" size={20} className="mr-2" />
              Подать заявку
            </Button>
            <Button size="lg" variant="outline" className="font-opensans text-lg px-8 py-4 border-2 border-record-purple text-record-purple hover:bg-record-purple/10">
              <Icon name="Search" size={20} className="mr-2" />
              Посмотреть рекорды
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold font-montserrat text-record-purple">
                12,847
              </div>
              <div className="text-gray-600 font-opensans">
                Активных рекордов
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold font-montserrat text-record-magenta">
                2,156
              </div>
              <div className="text-gray-600 font-opensans">
                Заявок на модерации
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold font-montserrat text-record-orange">
                89
              </div>
              <div className="text-gray-600 font-opensans">
                Стран участников
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;