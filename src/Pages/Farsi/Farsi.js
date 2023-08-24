import React from 'react'
import './Farsi.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ProductsCard from '../../Components/ProductsCard/ProductsCard';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import FactoryIcon from '@mui/icons-material/Factory';

export default function Farsi() {
  return (
    <div className='English'>
      <div className='DeliveryItems'>
        <div className="Container" id='DeliveryContainer'>
          <div className='DeliveryItem'>
            <LocalShippingIcon />
            تحویل سریع
          </div>
          <div className='DeliveryItem'>
            <SupportAgentIcon />
            پشتیبانی 24 ساعته
          </div>
          <div className='DeliveryItem'>
            <EngineeringIcon />
            کادر مجرب
          </div>
        </div>
      </div>
      <div className="SaymanInfos">
        <div className="SaymanInfoTitle">
          تخصص ما
          <div className='underline'></div>
        </div>
        <div className="Container SaymanInfo-1">
          <div className="imgContainer">
            <img src="sources/staff-1.jpg.webp" />
          </div>
          <div className="info fa" dir='rtl'>
            بر اساس بیانیه سازمان بهداشت جهانی، برای جلوگیری و شیوع انواع بیماری و آلودگی در مراکز درمانی، استفاده از کالاهای مصرفی پزشکی، نیاز و دغدغه اصلی است. در این راستا، شرکت البسه سایمان طب، به عنوان یکی از شرکت های برتر  در ایران، فعالیت خود را از سال ۱۳۹۷ با هدف تولید کالاهای مصرفی بیمارستانی باکیفیت آغاز نموده است</div>
        </div>
        <div className="Container SaymanInfo-1">
          <div className="info fa" dir='rtl'>
            بر اساس بیانیه سازمان بهداشت جهانی، برای جلوگیری و شیوع انواع بیماری و آلودگی در مراکز درمانی، استفاده از کالاهای مصرفی پزشکی، نیاز و دغدغه اصلی است. در این راستا، شرکت البسه سایمان طب، به عنوان یکی از شرکت های برتر  در ایران، فعالیت خود را از سال ۱۳۹۷ با هدف تولید کالاهای مصرفی بیمارستانی باکیفیت آغاز نموده است</div>
          <div className="imgContainer">
            <img src="sources/staff-2.jpg.webp" />
          </div>
        </div>
      </div>
      <div className="Products">
        <div className="SaymanInfoTitle">
          محصولات
          <div className='underline'></div>
        </div>
        <div className="Container ProductsBox">
          <ProductsCard img='sources/blouseAndpants.webp' title='بلوز و شلوار' rtl={true}>
            پزشکان، جراحان، بیماران و پرستاران از لباس یکبار مصرف ام آی آر یا لباس یکبار مصرف تصویربرداری در بخش‌های پرخطری که احتمال انتقال بیماری و ویروس بالاتر است مثل اتاق عمل، بخش مراقبت‌های ویژه، بخش نگهداری از بیماران کرونایی و سایر بخش‌های پرخطر بیمارستانی استفاده می‌کنند

          </ProductsCard>
          <ProductsCard img='sources/surgical.webp' title='گان جراحی' rtl={true}>
            پزشکان، جراحان، بیماران و پرستاران از لباس یکبار مصرف ام آی آر یا لباس یکبار مصرف تصویربرداری در بخش‌های پرخطری که احتمال انتقال بیماری و ویروس بالاتر است مثل اتاق عمل، بخش مراقبت‌های ویژه، بخش نگهداری از بیماران کرونایی و سایر بخش‌های پرخطر بیمارستانی استفاده می‌کنند

          </ProductsCard>
          <ProductsCard img='sources/BedShet.webp' title='ملحفه یکبار مصرف' rtl={true}>
            پزشکان، جراحان، بیماران و پرستاران از لباس یکبار مصرف ام آی آر یا لباس یکبار مصرف تصویربرداری در بخش‌های پرخطری که احتمال انتقال بیماری و ویروس بالاتر است مثل اتاق عمل، بخش مراقبت‌های ویژه، بخش نگهداری از بیماران کرونایی و سایر بخش‌های پرخطر بیمارستانی استفاده می‌کنند

          </ProductsCard>
          <ProductsCard img='sources/PillowCase.webp' title='روبالشی یکبار مصرف' rtl={true}>
            پزشکان، جراحان، بیماران و پرستاران از لباس یکبار مصرف ام آی آر یا لباس یکبار مصرف تصویربرداری در بخش‌های پرخطری که احتمال انتقال بیماری و ویروس بالاتر است مثل اتاق عمل، بخش مراقبت‌های ویژه، بخش نگهداری از بیماران کرونایی و سایر بخش‌های پرخطر بیمارستانی استفاده می‌کنند

          </ProductsCard>
          <ProductsCard img='sources/ShoeCover.webp' title='کاور کفش' rtl={true}>
            پزشکان، جراحان، بیماران و پرستاران از لباس یکبار مصرف ام آی آر یا لباس یکبار مصرف تصویربرداری در بخش‌های پرخطری که احتمال انتقال بیماری و ویروس بالاتر است مثل اتاق عمل، بخش مراقبت‌های ویژه، بخش نگهداری از بیماران کرونایی و سایر بخش‌های پرخطر بیمارستانی استفاده می‌کنند

          </ProductsCard>
          <ProductsCard img='sources/Hat.webp' title='کلاه آکاردیون' rtl={true}>
            پزشکان، جراحان، بیماران و پرستاران از لباس یکبار مصرف ام آی آر یا لباس یکبار مصرف تصویربرداری در بخش‌های پرخطری که احتمال انتقال بیماری و ویروس بالاتر است مثل اتاق عمل، بخش مراقبت‌های ویژه، بخش نگهداری از بیماران کرونایی و سایر بخش‌های پرخطر بیمارستانی استفاده می‌کنند

          </ProductsCard>
        </div>
      </div>
      <div className="Licenses">
        <div className="SaymanInfoTitle">
          مجوز ها
          <div className='underline'></div>
        </div>
        <div className="Container LicencesBox">
          <div className="Licenese">
            <img src="sources/Lic1.jpg" />
            <span>ISO 9001</span>
          </div>
          <div className="Licenese">
            <img src="sources/Lic2.png" />
            <span>ISO 9001</span>
          </div>
          <div className="Licenese">
            <img src="sources/Lic3.jpg" />
            <span>ISO 9001</span>
          </div>
        </div>
      </div>
      <div className="Footer">
        <div className="Container FooterBox">
          <span>
            <EmailIcon />
            <a href="mailto:<nowiki>saymanteb023@gmail.com">saymanteb023@gmail.com</a>
          </span>
          <span>
            <CallIcon />
            +98-918-878-6856 / +98-873-333-332
          </span>
          <span>
            <InstagramIcon />
            <a href="https://www.instagram.com/sayman.teb">sayman.teb</a>
          </span>
          <span className='fa'>
            <FactoryIcon />
            ایران - کردستان - سنندج - شهرک صنعتی - خیابان تعاون - روبروی کارخانه شیر
          </span>
        </div>
        <hr />
        <span>
          Copyright © 2023 Sayman Teb designed by <a href="https://github.com/Papymankan">Parsa Rostami</a>
        </span>
      </div>
    </div>
  )
}