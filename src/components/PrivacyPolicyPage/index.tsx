import { FC } from "react";
import { motion } from "framer-motion";
import { Container } from "@mui/system";

import "./PrivacyPolicyPage.scss";
import ToBackBtn, { BackBtn } from "../ToBackBtn";

const PrivacyPolicyPage: FC = () => {
  return (
    <motion.div>
      {" "}
      <ToBackBtn to={BackBtn.home} />
      <Container>
        <section className="privacy-policy">
          <h1 className="title">Политика конфиденциальности</h1>

          <h3 className="title">1. Общие положения</h3>
          <p>
            1.1. Настоящая Политика в отношении обработки персональных данных
            (далее — «Политика») подготовлена в соответствии с п. 2 ч. 1 ст.
            18.1 Федерального закона Российской Федерации «О персональных
            данных» №152-ФЗ от 27 июля 2006 года (далее — «Закон») и определяет
            позицию юридического лица ООО «СВИСС СМАЙЛ ГРУПП» (ОГРН:
            1147746185762, ИНН: 7704857549, адрес регистрации: г. Москва,
            Всеволожский пер., д. 2, стр. 2) и/или его аффилированных лиц,
            (далее — «Компания») в области обработки и защиты персональных
            данных (далее — «Данные»), соблюдения прав и свобод каждого человека
            и, в особенности, права на неприкосновенность частной жизни, личную
            и семейную тайну.
          </p>
          <h3 className="title">2. Область применения</h3>

          <p>
            2.1. Настоящая Политика распространяется на Данные, полученные как
            до, так и после ввода в действие настоящей Политики. 2.2. Понимая
            важность и ценность Данных, а также заботясь о соблюдении
            конституционных прав граждан Российской Федерации и граждан других
            государств, Компания обеспечивает надежную защиту Данных.
          </p>
          <h3 className="title">3. Определения </h3>
          <p>
            3.1. Под Данными понимается любая информация, относящаяся к прямо
            или косвенно определенному или определяемому физическому лицу
            (гражданину), т. е. к такой информации, в частности, относятся: имя,
            электронная почта, номер телефона. 3.2. Под обработкой Данных
            понимается любое действие (операция) или совокупность действий
            (операций) с Данными, совершаемых с использованием средств
            автоматизации и/или без использования таких средств. К таким
            действиям (операциям) относятся: сбор, запись, систематизация,
            накопление, хранение, уточнение (обновление, изменение), извлечение,
            использование, передача (распространение, предоставление, доступ),
            обезличивание, блокирование, удаление, уничтожение Данных. 3.3. Под
            безопасностью Данных понимается защищенность Данных от
            неправомерного и/или несанкционированного доступа к ним,
            уничтожения, изменения, блокирования, копирования, предоставления,
            распространения Данных, а также от иных неправомерных действий в
            отношении Данных.
          </p>
          <h3 className="title">
            4. Правовые основания и цели обработки Данных
          </h3>
          <p>
            4.1. Обработка и обеспечение безопасности Данных в Компании
            осуществляется в соответствии с требованиями Конституции Российской
            Федерации, Закона, Трудового кодекса Российской Федерации,
            подзаконных актов, других определяющих случаи и особенности
            обработки Данных федеральных законов Российской Федерации,
            руководящих и методических документов ФСТЭК России и ФСБ России.
            4.2. Субъектами Данных, обрабатываемых Компанией, являются: —
            клиенты — потребители, в т. ч. посетители сайта
            https://swiss-smile.pro, принадлежащего Компании в том числе с целью
            оформления заказа на Сайте https://swiss-smile.pro с последующей
            доставкой клиенту, получатели услуг. 4.3. Компания осуществляет
            обработку Данных субъектов в следующих целях: — осуществления
            возложенных на Компанию законодательством Российской Федерации
            функций, полномочий и обязанностей в соответствии с федеральными
            законами, в том числе, но не ограничиваясь: Гражданским кодексом
            Российской Федерации, Налоговым кодексом Российской Федерации,
            Трудовым кодексом Российской Федерации, Семейным кодексом Российской
            Федерации, Федеральным законом от 01.04.1996 г. № 27-ФЗ «Об
            индивидуальном (персонифицированном) учете в системе обязательного
            пенсионного страхования», Федеральным законом от 27.07.2006 г. №
            152-ФЗ «О персональных данных», Федеральным законом от 28.03.1998 г.
            № 53-ФЗ «О воинской обязанности и военной службе», Федеральным
            законом от 26.02.1997 г. № 31-ФЗ «О мобилизационной подготовке и
            мобилизации в Российской Федерации», Федеральным законом от
            08.02.1998 г. №14-ФЗ «Об обществах с ограниченной ответственностью»,
            Федеральным законом от 07.02.1992 №2300-1 «О защите прав
            потребителей», Федеральным законом от 21.11.1996 г. № 129-ФЗ «О
            бухгалтерском учете», Федеральным законом от 29.11.2010 г. № 326-ФЗ
            «Об обязательном медицинском страховании в Российской Федерации». —
            Клиентов — потребителей в целях: предоставления информации по
            товарам/услугам, проходящим акциям и специальным предложениям;
            анализа качества предоставляемого Компанией сервиса и улучшению
            качества обслуживания клиентов Компании.
          </p>
          <h3 className="title">5. Принципы и условия обработки Данных</h3>
          <p>
            5.1. При обработке Данных Компания придерживается следующих
            принципов: обработка Данных осуществляется на законной и
            справедливой основе; Данные не раскрываются третьим лицам и не
            распространяются без согласия субъекта Данных, за исключением
            случаев, требующих раскрытия Данных по запросу уполномоченных
            государственных органов, судопроизводства; определение конкретных
            законных целей до начала обработки (в т. ч. сбора) Данных; ведется
            сбор только тех Данных, которые являются необходимыми и достаточными
            для заявленной цели обработки; объединение баз данных, содержащих
            Данные, обработка которых осуществляется в целях, несовместимых
            между собой не допускается; обработка Данных ограничивается
            достижением конкретных, заранее определенных и законных целей;
            обрабатываемые Данные подлежат уничтожению или обезличиванию по
            достижению целей обработки или в случае утраты необходимости в
            достижении этих целей, если иное не предусмотрено федеральным
            законом. 5.2. Компания может включать Данные субъектов в
            общедоступные источники Данных, при этом Компания берет письменное
            согласие субъекта на обработку его Данных, либо путем выражения
            согласия через форму сайта (чекбокс), нажатием которого субъект
            персональных данных выражает свое согласие. 5.3. Компания не
            осуществляет обработку Данных, касающихся расовой, национальной
            принадлежности, политических взглядов, религиозных, философских и
            иных убеждений, интимной жизни, членства в общественных
            объединениях, в том числе в профессиональных союзах. 5.4.
            Биометрические Данные (сведения, которые характеризуют
            физиологические и биологические особенности человека, на основании
            которых можно установить его личность и которые используются
            оператором для установления личности субъекта Данные) в Компании не
            обрабатываются. 5.5. Компания не осуществляет трансграничную
            передачу Данных. 5.6. В случаях, установленных законодательством
            Российской Федерации, Компания вправе осуществлять передачу Данных
            третьим лицам (федеральной налоговой службе, государственному
            пенсионному фонду и иным государственным органам) в случаях,
            предусмотренных законодательством Российской Федерации. 5.7.
            Компания вправе поручить обработку Данных субъектов Данных третьим
            лицам с согласия субъекта Данных, на основании заключаемого с этими
            лицами договора, в том числе при согласии с пользовательским
            соглашением и политики обработки персональных данных размещенных на
            сайте. 5.8. Лица, осуществляющие обработку Данных на основании
            заключаемого с Компанией договора (поручения оператора), обязуются
            соблюдать принципы и правила обработки и защиты Данных,
            предусмотренные Законом. Для каждого третьего лица в договоре
            определяются перечень действий (операций) с Данными, которые будут
            совершаться третьим лицом, осуществляющим обработку Данных, цели
            обработки, устанавливается обязанность такого лица соблюдать
            конфиденциальность и обеспечивать безопасность Данных при их
            обработке, указываются требования к защите обрабатываемых Данных в
            соответствии с Законом. 5.9. В целях исполнения требований
            действующего законодательства Российской Федерации и своих
            договорных обязательств обработка Данных в Компании осуществляется
            как с использованием, так и без использования средств автоматизации.
            Совокупность операций обработки включает сбор, запись,
            систематизацию, накопление, хранение, уточнение (обновление,
            изменение), извлечение, использование, передачу (предоставление,
            доступ), обезличивание, блокирование, удаление, уничтожение Данных.
            5.10. В Компании запрещается принятие на основании исключительно
            автоматизированной обработки Данных решений, порождающих юридические
            последствия в отношении субъекта Данных или иным образом
            затрагивающих его права и законные интересы, за исключением случаев,
            предусмотренных законодательством Российской Федерации.
          </p>
          <h3 className="title">
            6. Права и обязанности субъектов Данных, а также Компании в части
            обработки Данных
          </h3>
          <p>
            6.1. Субъект, Данные которого обрабатываются Компанией, имеет право:
            — получать от Компании: подтверждение факта обработки Данных и
            сведения о наличии Данных, относящихся к соответствующему субъекту
            Данных; сведения о правовых основаниях и целях обработки Данных;
            сведения о применяемых Компанией способах обработки Данных; сведения
            о наименовании и местонахождении Компании; сведения о лицах (за
            исключением работников Компании), которые имеют доступ к Данным или
            которым могут быть раскрыты Данные на основании договора с Компанией
            или на основании федерального закона; перечень обрабатываемых
            Данных, относящихся к субъекту Данных, и информацию об источнике их
            получения, если иной порядок предоставления таких Данных не
            предусмотрен федеральным законом; сведения о сроках обработки
            Данных, в том числе о сроках их хранения; сведения о порядке
            осуществления субъектом Данных прав, предусмотренных Законом;
            наименование (Ф.И.О.) и адрес лица, осуществляющего обработку Данных
            по поручению Компании; иные сведения, предусмотренные Законом или
            другими нормативно-правовыми актами Российской Федерации; —
            требовать от Компании: уточнения своих Данных, их блокирования или
            уничтожения в случае, если Данные являются неполными, устаревшими,
            неточными, незаконно полученными или не являются необходимыми для
            заявленной цели обработки; отозвать свое согласие на обработку
            Данных в любой момент; требовать устранения неправомерных действий
            Компании в отношении его Данных; обжаловать действия или бездействие
            Компании в Федеральную службу по надзору в сфере связи,
            информационных технологий и массовых коммуникаций (Роскомнадзор) или
            в судебном порядке в случае, если субъект Данных считает, что
            Компания осуществляет обработку его Данных с нарушением требований
            Закона или иным образом нарушает его права и свободы. — на защиту
            своих прав и законных интересов, в том числе на возмещения убытков
            и/или компенсацию морального вреда в судебном порядке. 6.2. Компания
            в процессе обработки Данных обязана: — предоставлять субъекту Данных
            по его запросу информацию, касающуюся обработки его ПДн, либо на
            законных основаниях предоставить отказ в течение тридцати дней с
            даты получения запроса субъекта Данных или его представителя; —
            разъяснить субъекту Данных юридические последствия отказа
            предоставить Данные, если предоставление Данных является
            обязательным в соответствии с федеральным законом; — до начала
            обработки Данных (если Данные получены не от субъекта Данных)
            предоставить субъекту Данных следующую информацию, за исключением
            случаев, предусмотренных частью 4 статьи 18 Закона: 1) наименование
            либо фамилия, имя, отчество и адрес Компании или ее представителя;
            2) цель обработки Данных и ее правовое основание; 3) предполагаемые
            пользователи Данных; 4) установленные Законом права субъектов
            Данных; 5) источник получения Данных. — принимать необходимые
            правовые, организационные и технические меры или обеспечивать их
            принятие для защиты Данных от неправомерного или случайного доступа
            к ним, уничтожения, изменения, блокирования, копирования,
            предоставления, распространения Данных, а также от иных
            неправомерных действий в отношении Данных; — опубликовать в сети
            Интернет и обеспечить неограниченный доступ с использованием сети
            Интернет к документу, определяющему его политику в отношении
            обработки Данных, к сведениям о реализуемых требованиях к защите
            Данных; — предоставить субъектам Данных и/или их представителям
            безвозмездно возможность ознакомления с Данными при обращении с
            соответствующим запросом в течение 30 дней с даты получения
            подобного запроса; — осуществить блокирование неправомерно
            обрабатываемых Данных, относящихся к субъекту Данных, или обеспечить
            их блокирование (если обработка Данных осуществляется другим лицом,
            действующим по поручению Компании) с момента обращения или получения
            запроса на период проверки, в случае выявления неправомерной
            обработки Данных при обращении субъекта Данных или его представителя
            либо по запросу субъекту Данных или его представителя либо
            уполномоченного органа по защите прав субъектов персональных данных;
            — уточнить Данные либо обеспечить их уточнение (если обработка
            Данных осуществляется другим лицом, действующим по поручению
            Компании) в течение 7 рабочих дней со дня представления сведений и
            снять блокирование Данных, в случае подтверждения факта неточности
            Данных на основании сведений, представленных субъектом Данных или
            его представителем; — прекратить неправомерную обработку Данных или
            обеспечить прекращение неправомерной обработки Данных лицом,
            действующим по поручению Компании, в случае выявления неправомерной
            обработки Данных, осуществляемой Компанией или лицом, действующим на
            основании договора с Компанией, в срок, не превышающий 3 рабочих
            дней с даты этого выявления; — прекратить обработку Данных или
            обеспечить ее прекращение (если обработка Данных осуществляется
            другим лицом, действующим по договору с Компанией) и уничтожить
            Данные или обеспечить их уничтожение (если обработка Данных
            осуществляется другим лицом, действующим по договору с Компанией) по
            достижения цели обработки Данных, если иное не предусмотрено
            договором, стороной которого, выгодоприобретателем или поручителем
            по которому является субъект Данных, в случае достижения цели
            обработки Данных; — прекратить обработку Данных или обеспечить ее
            прекращение и уничтожить Данные или обеспечить их уничтожение в
            случае отзыва субъектом Данных согласия на обработку Данных, если
            Компания не вправе осуществлять обработку Данных без согласия
            субъекта Данных; — вести журнал учета обращений субъектов ПДн, в
            котором должны фиксироваться запросы субъектов Данных на получение
            Данных, а также факты предоставления Данных по этим запросам.
          </p>
          <h3 className="title">7. Требования к защите Данных </h3>
          <p>
            7.1. Компания при обработке Данных принимает необходимые правовые,
            организационные и технические меры для защиты Данных от
            неправомерного и/или несанкционированного доступа к ним,
            уничтожения, изменения, блокирования, копирования, предоставления,
            распространения Данных, а также от иных неправомерных действий в
            отношении Данных. 7.2. К таким мерам в соответствии с Законом, в
            частности, относятся: — назначение лица, ответственного за
            организацию обработки Данных, и лица, ответственного за обеспечение
            безопасности Данных; — разработка и утверждение локальных актов по
            вопросам обработки и защиты Данных; — применение правовых,
            организационных и технических мер по обеспечению безопасности
            Данных: определение угроз безопасности Данных при их обработке в
            информационных системах персональных данных; применение
            организационных и технических мер по обеспечению безопасности Данных
            при их обработке в информационных системах персональных данных,
            необходимых для выполнения требований к защите Данных, исполнение
            которых обеспечивает установленные Правительством Российской
            Федерации уровни защищенности Данных; применение прошедших в
            установленном порядке процедуру оценки соответствия средств защиты
            информации; оценка эффективности принимаемых мер по обеспечению
            безопасности Данных до ввода в эксплуатацию информационной системы
            персональных данных; учет машинных носителей Данных, если хранение
            Данных осуществляется на машинных носителях; обнаружение фактов
            несанкционированного доступа к Данным и принятие мер по недопущению
            подобных инцидентов в дальнейшем; восстановление Данных,
            модифицированных или уничтоженных вследствие несанкционированного
            доступа к ним; установление правил доступа к Данным, обрабатываемым
            в информационной системе персональных данных, а также обеспечение
            регистрации и учета всех действий, совершаемых с Данными в
            информационной системе персональных данных. — контроль за
            принимаемыми мерами по обеспечению безопасности Данных и уровнем
            защищенности информационных систем персональных данных; — оценка
            вреда, который может быть причинен субъектам Данных в случае
            нарушения требований Закона, соотношение указанного вреда и
            принимаемых Компанией мер, направленных на обеспечение выполнения
            обязанностей, предусмотренных Законом; — соблюдение условий,
            исключающих несанкционированный доступ к материальным носителям
            Данных и обеспечивающих сохранность Данных; — ознакомление
            работников Компании, непосредственно осуществляющих обработку
            Данных, с положениями законодательства Российской Федерации о
            Данных, в том числе с требованиями к защите Данных, локальными
            актами по вопросам обработки и защиты Данных, и обучение работников
            Компании.
          </p>
          <h3 className="title">8. Сроки обработки (хранения) Данных</h3>
          <p>
            8.1. Сроки обработки (хранения) Данных определяются исходя из целей
            обработки Данных, в соответствии со сроком действия договора с
            субъектом Данных, требованиями федеральных законов, требованиями
            операторов Данных, по поручению которых Компания осуществляет
            обработку Данных, основными правилами работы архивов организаций,
            сроками исковой давности. 8.2. Данные, срок обработки (хранения)
            которых истек, должны быть уничтожены, если иное не предусмотрено
            федеральным законом. Хранение Данных после прекращения их обработки
            допускается только после их обезличивания.
          </p>
          <h3 className="title">
            9. Порядок получения разъяснений по вопросам обработки Данных{" "}
          </h3>
          <p>
            9.1. Лица, чьи Данные обрабатываются Компанией, могут получить
            разъяснения по вопросам обработки своих Данных, обратившись лично в
            Компанию или направив соответствующий письменный запрос по адресу
            местонахождения Компании: 119034, г. Москва, Всеволожский пер., д.
            2, стр. 2. 9.2. В случае направления официального запроса в Компанию
            в тексте запроса необходимо указать: — фамилию, имя, отчество
            субъекта Данных или его представителя; — номер основного документа,
            удостоверяющего личность субъекта Данных или его представителя,
            сведения о дате выдачи указанного документа и выдавшем его органе; —
            сведения, подтверждающие наличие у субъекта Данных отношений с
            Компанией; — информацию для обратной связи с целью направления
            Компанией ответа на запрос; — подпись субъекта Данных (или его
            представителя). Если запрос отправляется в электронном виде, то он
            должен быть оформлен в виде электронного документа и подписан
            электронной подписью в соответствии с законодательством Российской
            Федерации.
          </p>
          <h3 className="title">
            10. Особенности обработки и защиты Данных, собираемых Компанией с
            использованием сети Интернет
          </h3>
          <p>
            10.1. Компания обрабатывает Данные, поступающие от пользователей
            Cайта с ресурса: https://swiss-smile.pro (далее совместно — Cайт), а
            также поступающие на телефон Компании: +7 495 637-28-88, на адрес
            электронной почты Компании: info@swiss-smile.pro, через форму
            обратной связи Компании, расположенную по адресу:
            https://swiss-smile.pro/kontakty. 10.2. Сбор Данных Существуют два
            основных способа, с помощью которых Компания получает Данные с
            помощью сети Интернет: 10.2.1. Предоставление Данных
            (самостоятельный ввод данных): имя, электронная почта, номер
            телефона. 10.2.2. Субъектами Данных путем поступления на телефон
            Компании: +7 495 637-28-88, на адрес электронной почты Компании:
            info@swiss-smile.pro, через форму обратной связи Компании,
            расположенную по адресу: https://swiss-smile.pro/kontakty. 10.3.
            Автоматически собираемая информация Компания может собирать и
            обрабатывать сведения, не являющимися персональными данными: —
            информацию об интересах пользователей на Сайте на основе введенных
            поисковых запросов пользователей Сайта о реализуемых и предлагаемых
            к продаже товаров Компанией с целью предоставления актуальной
            информации клиентам Компании при использовании Сайта, а также
            обобщения и анализа информации, о том какие разделы Сайта и товары
            пользуются наибольшим спросом у клиентов Компании; — обработка и
            хранение поисковых запросов пользователей Сайта с целью обобщения и
            создания клиентской статистики об использовании разделов Сайта.
            Компания автоматически получает некоторые виды информации,
            получаемой в процессе взаимодействия пользователей с Cайтом,
            переписки по электронной почте и т. п. Речь идет о технологиях и
            сервисах, таких как веб-протоколы, куки, веб-отметки, а также
            приложения и инструменты указанной третьей стороны. При этом
            веб-отметки, куки и другие мониторинговые технологии не дают
            возможность автоматически получать Данные. Если пользователь Сайта
            по своему усмотрению предоставляет свои Данные, например, при
            заполнении формы обратной связи или при отправке электронного
            письма, то только тогда запускаются процессы автоматического сбора
            подробной информации для удобства пользования веб-сайтами и/или для
            совершенствования взаимодействия с пользователями. 10.4.
            Использование Данных Компания вправе пользоваться предоставленными
            Данными в соответствии с заявленными целями их сбора при наличии
            согласия субъекта Данных, если такое согласие требуется в
            соответствии с требованиями законодательства Российской Федерации в
            области Данных. Полученные Данные в обобщенном и обезличенном виде
            могут использоваться для лучшего понимания потребностей покупателей
            товаров и услуг, реализуемых Компанией и улучшения качества
            обслуживания. 10.5. Передача Данных Компания может поручать
            обработку Данных третьим лицам исключительно с согласия субъекта
            Данных. Также Данные могут передаваться третьим лицам в следующих
            случаях: а) B качестве ответа на правомерные запросы уполномоченных
            государственных органов, в соответствии с законами, решениями суда и
            пр. б) Данные не могут передаваться третьим лицам для маркетинговых,
            коммерческих и иных аналогичных целей, за исключением случаев
            получения предварительного согласия субъекта Данных. 10.6. Сайт
            содержит ссылки на иные веб-ресурсы, где может находиться полезная и
            интересная для пользователей Сайта информация. При этом действие
            настоящей Политики не распространяется на такие иные сайты.
            Пользователям, переходящим по ссылкам на другие сайты, рекомендуется
            ознакомиться с политиками об обработке Данных, размещенными на таких
            сайтах. 10.7. Пользователь Сайта может в любое время отозвать свое
            согласие на обработку Данных, направив сообщение, позвонив по номеру
            телефона Компании: +7 495 637-28-88, на адрес электронной почты
            Компании: info@swiss-smile.pro, через форму обратной связи Компании,
            расположенную по адресу: https://swiss-smile.pro/kontakty, либо
            направив письменное уведомление по адресу Компании: 119034, г.
            Москва, Всеволожский пер., д. 2, стр. 2. После получения такого
            сообщения обработка Данных пользователя будет прекращена, а его
            Данные будут удалены, за исключением случаев, когда обработка может
            быть продолжена в соответствии с законодательством. Заключительные
            положения Настоящая Политика является локальным нормативным актом
            Компании. Настоящая Политика является общедоступной. Общедоступность
            настоящей Политики обеспечивается публикацией на Сайте Компании.
            Настоящая Политика может быть пересмотрена в любом из следующих
            случаев: — при изменении законодательства Российской Федерации в
            области обработки и защиты персональных данных; — в случаях
            получения предписаний от компетентных государственных органов на
            устранение несоответствий, затрагивающих область действия Политики;
            — по решению руководства Компании; — при изменении целей и сроков
            обработки Данных; — при изменении организационной структуры,
            структуры информационных и/или телекоммуникационных систем (или
            введении новых); — при применении новых технологий обработки и
            защиты Данных (в т. ч. передачи, хранения); — при появлении
            необходимости в изменении процесса обработки Данных, связанной с
            деятельностью Компании. В случае неисполнения положений настоящей
            Политики Компания и ее работники несут ответственность в
            соответствии с действующим законодательством Российской Федерации.
            Контроль исполнения требований настоящей Политики осуществляется
            лицами, ответственными за организацию обработки Данных Компании, а
            также за безопасность персональных данных.
          </p>
        </section>
      </Container>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
