import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import benefit1 from "./assets/benefit1.png";
import benefit2 from "./assets/benefit2.png";
import benefit3 from "./assets/benefit3.png";
import benefit4 from "./assets/benefit4.png";
import pention from "./assets/pention.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";

export const App = () => {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit1 = () => {
    setLoading1(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading1(false);
    });
  };

  const submit2 = () => {
    setLoading2(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading2(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Gap size={24} />
          <Typography.TitleResponsive
            font="system"
            tag="h1"
            view="medium"
            weight="semibold"
          >
            Переведите пенсию на счёт в Альфа-Банк
          </Typography.TitleResponsive>
          <Gap size={12} />
          <Typography.Text tag="p" view="primary-medium" color="secondary">
            Выберите способ — идти никуда не придётся
          </Typography.Text>
          <img
            src={pention}
            alt="Карта для ребенка"
            style={{ width: "85%", borderRadius: "16px" }}
          />
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Привилегии
        </Typography.TitleResponsive>

        <div className={appSt.benefits}>
          <div className={appSt.benefit}>
            <img
              src={benefit1}
              alt=""
              width={80}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text tag="p" view="primary-small" weight="bold">
              5% кэшбэка в аптеках каждый месяц
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={benefit2}
              alt=""
              width={70}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text tag="p" view="primary-small" weight="bold">
              Бесплатное снятие наличных
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={benefit3}
              alt=""
              width={80}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text tag="p" view="primary-small" weight="bold">
              Вклад до 21,5% годовых
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={benefit4}
              alt=""
              width={90}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Бесплатные пуши и смс
            </Typography.Text>
          </div>
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
        >
          Выберите способ
        </Typography.TitleResponsive>

        <Gap size={12} />

        <div className={appSt.product}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Переводы себе
            </Typography.Text>
            <img
              src={icon1}
              alt=""
              width={50}
              height={40}
              style={{ objectFit: "cover" }}
            />
          </div>
          <Gap size={12} />
          <Typography.Text tag="p" view="primary-small">
            Настройте автоперевод один раз — деньги будут приходить из другого
            банка на ваш счёт по расписанию.
          </Typography.Text>
          <Typography.Text tag="p" view="primary-small">
            Бесплатно и безопасно.
          </Typography.Text>
          <Gap size={24} />
          <ButtonMobile
            block
            view="primary"
            loading={loading1}
            onClick={submit1}
            size="xs"
          >
            Начать подключение
          </ButtonMobile>
        </div>

        <Gap size={12} />

        <div className={appSt.product}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Через СФР
            </Typography.Text>
            <img
              src={icon2}
              alt=""
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
            />
          </div>
          <Gap size={12} />
          <Typography.Text tag="p" view="primary-small">
            Заполните заявление о переводе пенсии в Альфа-Банк, мы отправим его
            в СФР через Госуслуги.
          </Typography.Text>
          <Typography.Text tag="p" view="primary-small">
            Без походов в банк или СФР. Бесплатно и безопасно.
          </Typography.Text>
          <Gap size={24} />
          <ButtonMobile
            block
            view="primary"
            loading={loading2}
            onClick={submit2}
            size="xs"
          >
            Начать подключение
          </ButtonMobile>
        </div>

        <Gap size={24} />
      </div>
    </>
  );
};
