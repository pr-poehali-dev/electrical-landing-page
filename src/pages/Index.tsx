import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-blue-600" size={32} />
              <span className="text-2xl font-bold text-gray-900">ЭлектроМастер</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Портфолио</a>
              <a href="#prices" className="text-gray-600 hover:text-blue-600 transition-colors">Цены</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Вызвать мастера
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-500 text-white mb-4">24/7 Экстренный вызов</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Профессиональные <br />
                <span className="text-orange-400">электромонтажные</span> <br />
                работы
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Качественные услуги электрика для квартир, домов и офисов. 
                Диагностика, ремонт, подключение электричества и монтаж оборудования.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-green-400 mr-2" size={20} />
                  <span>Лицензия и допуски</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" className="text-green-400 mr-2" size={20} />
                  <span>Гарантия на работы</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/4aa3f5d0-d8fc-4dd0-aa20-8c55ae383f46.jpg" 
                alt="Профессиональный электрик за работой"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <section className="bg-orange-500 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center mb-2 sm:mb-0">
              <Icon name="AlertTriangle" size={24} className="mr-2" />
              <span className="font-semibold">Аварийный вызов электрика 24/7</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:+79123456789" className="flex items-center font-bold text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (912) 345-67-89
              </a>
              <span className="text-sm">Выезд в течение часа</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр электромонтажных работ от профессиональных мастеров
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Квартиры и дома</CardTitle>
                <CardDescription>
                  Полная замена проводки, установка розеток, выключателей, светильников
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Офисы и предприятия</CardTitle>
                <CardDescription>
                  Монтаж электросетей, подключение оборудования, системы освещения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Диагностика сетей</CardTitle>
                <CardDescription>
                  Поиск неисправностей, тестирование проводки, составление схем
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Ремонт и замена</CardTitle>
                <CardDescription>
                  Устранение коротких замыканий, замена автоматов, счетчиков
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Gauge" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Увеличение мощности</CardTitle>
                <CardDescription>
                  Подключение дополнительных линий, увеличение выделенной мощности
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wind" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Кондиционеры и генераторы</CardTitle>
                <CardDescription>
                  Монтаж кондиционеров, подключение резервных генераторов
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Портфолио работ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры выполненных проектов и довольных клиентов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="/img/dd51f503-bd61-47a5-8324-afbbdfe31ee6.jpg" 
                alt="Монтаж умного дома"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Умный дом</h3>
                <p className="text-gray-600 mb-4">Полная автоматизация освещения и электроники в коттедже</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Завершен</Badge>
                  <span className="text-sm text-gray-500">2 недели</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Icon name="Building" size={64} className="text-blue-600" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Офисный центр</h3>
                <p className="text-gray-600 mb-4">Электромонтаж для бизнес-центра на 500 рабочих мест</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Завершен</Badge>
                  <span className="text-sm text-gray-500">1 месяц</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <Icon name="Home" size={64} className="text-green-600" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Загородный дом</h3>
                <p className="text-gray-600 mb-4">Подключение к сети, установка генератора резерва</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Завершен</Badge>
                  <span className="text-sm text-gray-500">10 дней</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Цены на услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачные цены без скрытых доплат
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Диагностика</CardTitle>
                <div className="text-3xl font-bold text-blue-600">от 1500₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Поиск неисправностей</li>
                  <li>• Составление схемы</li>
                  <li>• Рекомендации</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Розетки/Выключатели</CardTitle>
                <div className="text-3xl font-bold text-blue-600">от 800₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Установка розетки</li>
                  <li>• Замена выключателя</li>
                  <li>• Подключение</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Электрощиток</CardTitle>
                <div className="text-3xl font-bold text-blue-600">от 5000₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Замена автоматов</li>
                  <li>• Установка УЗО</li>
                  <li>• Сборка щитка</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Кондиционер</CardTitle>
                <div className="text-3xl font-bold text-blue-600">от 3000₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Прокладка кабеля</li>
                  <li>• Подключение</li>
                  <li>• Проверка работы</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Точную стоимость определим после осмотра объекта</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Calculator" size={20} className="mr-2" />
              Получить расчет
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-600 mb-8">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Phone" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-600">+7 (912) 345-67-89</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Mail" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">info@elektromaster.ru</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="MapPin" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Зона работы</div>
                    <div className="text-gray-600">Москва и область</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Clock" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-gray-600">Круглосуточно, без выходных</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Заказать вызов мастера</CardTitle>
                <CardDescription>Оставьте контакты и мы перезвоним вам</CardDescription>
              </CardHeader>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                
                <div>
                  <Label htmlFor="address">Адрес</Label>
                  <Input id="address" placeholder="Адрес объекта" />
                </div>
                
                <div>
                  <Label htmlFor="message">Описание проблемы</Label>
                  <Textarea id="message" placeholder="Опишите что нужно сделать" rows={4} />
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-orange-400" size={24} />
                <span className="text-xl font-bold">ЭлектроМастер</span>
              </div>
              <p className="text-gray-400">
                Профессиональные электромонтажные работы с гарантией качества
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Диагностика сетей</li>
                <li>Замена проводки</li>
                <li>Установка розеток</li>
                <li>Монтаж щитков</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (912) 345-67-89</li>
                <li>info@elektromaster.ru</li>
                <li>Москва и область</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Преимущества</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Опыт работы 10+ лет</li>
                <li>✓ Гарантия на все работы</li>
                <li>✓ Лицензии и допуски</li>
                <li>✓ Выезд в день обращения</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ЭлектроМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}