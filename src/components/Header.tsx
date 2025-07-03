import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Trophy" className="text-record-purple" size={32} />
            <span className="text-2xl font-bold font-montserrat bg-gradient-to-r from-record-purple to-record-magenta bg-clip-text text-transparent">
              RecordHub
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-record-purple transition-colors font-opensans"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-record-purple transition-colors font-opensans"
            >
              Категории
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-record-purple transition-colors font-opensans"
            >
              Регистрация
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-record-purple transition-colors font-opensans"
            >
              О проекте
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-record-purple transition-colors font-opensans"
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="font-opensans">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
            <Button className="bg-gradient-to-r from-record-purple to-record-magenta hover:from-record-purple/90 hover:to-record-magenta/90 font-opensans">
              Подать заявку
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
