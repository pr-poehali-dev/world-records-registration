import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const RegistrationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Зарегистрировать рекорд
          </h2>
          <p className="text-xl text-gray-600 font-opensans max-w-2xl mx-auto">
            Подайте заявку на признание вашего достижения с подтверждающими
            материалами
          </p>
        </div>

        <Card className="shadow-xl border-2">
          <CardHeader className="bg-gradient-to-r from-record-purple/10 to-record-magenta/10">
            <CardTitle className="text-2xl font-montserrat text-center">
              Форма регистрации рекорда
            </CardTitle>
            <CardDescription className="text-center font-opensans">
              Все поля обязательны для заполнения
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-opensans font-medium">
                  ФИО заявителя
                </Label>
                <Input
                  id="name"
                  placeholder="Иванов Иван Иванович"
                  className="font-opensans"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-opensans font-medium">
                  Электронная почта
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  className="font-opensans"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="font-opensans font-medium">
                Категория рекорда
              </Label>
              <Select>
                <SelectTrigger className="font-opensans">
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sport">Спорт</SelectItem>
                  <SelectItem value="science">Наука</SelectItem>
                  <SelectItem value="art">Искусство</SelectItem>
                  <SelectItem value="unusual">Необычные достижения</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title" className="font-opensans font-medium">
                Название рекорда
              </Label>
              <Input
                id="title"
                placeholder="Например: Самый быстрый бег на 100 метров"
                className="font-opensans"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="font-opensans font-medium"
              >
                Подробное описание достижения
              </Label>
              <Textarea
                id="description"
                placeholder="Опишите детали вашего достижения, условия выполнения, результаты..."
                className="min-h-[120px] font-opensans"
              />
            </div>

            <div className="space-y-4">
              <Label className="font-opensans font-medium">
                Подтверждающие материалы
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-record-purple transition-colors cursor-pointer">
                  <Icon
                    name="Camera"
                    className="mx-auto mb-2 text-gray-400"
                    size={48}
                  />
                  <div className="text-sm font-opensans text-gray-600">
                    Кликните для загрузки фото
                  </div>
                  <div className="text-xs font-opensans text-gray-400 mt-1">
                    Макс. размер: 10 МБ
                  </div>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-record-purple transition-colors cursor-pointer">
                  <Icon
                    name="Video"
                    className="mx-auto mb-2 text-gray-400"
                    size={48}
                  />
                  <div className="text-sm font-opensans text-gray-600">
                    Кликните для загрузки видео
                  </div>
                  <div className="text-xs font-opensans text-gray-400 mt-1">
                    Макс. размер: 100 МБ
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-record-purple to-record-magenta hover:from-record-purple/90 hover:to-record-magenta/90 text-white font-opensans text-lg px-12 py-4"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить на модерацию
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationSection;
