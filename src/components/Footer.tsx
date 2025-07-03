import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Trophy" className="text-record-purple" size={28} />
              <span className="text-xl font-bold font-montserrat">
                RecordHub
              </span>
            </div>
            <p className="text-gray-400 font-opensans">
              Платформа для регистрации и признания мировых рекордов в различных
              областях.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-lg">Навигация</h4>
            <ul className="space-y-2 font-opensans">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-record-purple transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-record-purple transition-colors"
                >
                  Категории
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-record-purple transition-colors"
                >
                  Регистрация
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-record-purple transition-colors"
                >
                  О проекте
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-lg">Поддержка</h4>
            <ul className="space-y-2 font-opensans">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-record-purple transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-record-purple transition-colors"
                >
                  Правила
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-record-purple transition-colors"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-record-purple transition-colors"
                >
                  Помощь
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-lg">
              Социальные сети
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-record-purple transition-colors"
              >
                <Icon name="Facebook" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-record-purple transition-colors"
              >
                <Icon name="Twitter" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-record-purple transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-record-purple transition-colors"
              >
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-opensans">
            © 2024 RecordHub. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
