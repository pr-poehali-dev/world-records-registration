import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const categories = [
  {
    title: "Спорт",
    icon: "Activity",
    color: "record-purple",
    description: "Атлетические достижения и спортивные рекорды",
    count: 4285,
    examples: ["Скорость", "Сила", "Выносливость"],
  },
  {
    title: "Наука",
    icon: "Atom",
    color: "record-blue",
    description: "Научные открытия и технические достижения",
    count: 1847,
    examples: ["Математика", "Физика", "Химия"],
  },
  {
    title: "Искусство",
    icon: "Palette",
    color: "record-magenta",
    description: "Творческие достижения и художественные рекорды",
    count: 3629,
    examples: ["Музыка", "Живопись", "Скульптура"],
  },
  {
    title: "Необычные достижения",
    icon: "Sparkles",
    color: "record-orange",
    description: "Уникальные и нестандартные достижения",
    count: 3086,
    examples: ["Коллекции", "Мастерство", "Навыки"],
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Категории рекордов
          </h2>
          <p className="text-xl text-gray-600 font-opensans max-w-2xl mx-auto">
            Выберите категорию для регистрации своего достижения или
            исследования существующих рекордов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-${category.color}`}
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${category.color}/10 flex items-center justify-center group-hover:bg-${category.color}/20 transition-all duration-300`}
                >
                  <Icon
                    name={category.icon as any}
                    className={`text-${category.color}`}
                    size={32}
                  />
                </div>
                <CardTitle className="font-montserrat text-xl">
                  {category.title}
                </CardTitle>
                <CardDescription className="font-opensans text-sm">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold font-montserrat text-${category.color}`}
                  >
                    {category.count.toLocaleString()}
                  </div>
                  <div className="text-gray-500 text-sm font-opensans">
                    Активных рекордов
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.examples.map((example, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs font-opensans"
                    >
                      {example}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
