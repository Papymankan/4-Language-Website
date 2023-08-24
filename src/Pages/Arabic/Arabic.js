import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ProductsCard from '../../Components/ProductsCard/ProductsCard';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import FactoryIcon from '@mui/icons-material/Factory';

export default function Arabic() {
  return (
    <div className='English'>
      <div className='DeliveryItems'>
        <div className="Container" id='DeliveryContainer'>
          <div className='DeliveryItem'>
            <LocalShippingIcon />
            توصيل سريع
          </div>
          <div className='DeliveryItem'>
            <SupportAgentIcon />
            دعم على مدار 24 ساعة
          </div>
          <div className='DeliveryItem'>
            <EngineeringIcon />
            الموظفين ذوي الخبرة
          </div>
        </div>
      </div>
      <div className="SaymanInfos">
        <div className="SaymanInfoTitle">
          خبرتنا
          <div className='underline'></div>
        </div>
        <div className="Container SaymanInfo-1">
          <div className="imgContainer">
            <img src="sources/staff-1.jpg.webp" />
          </div>
          <div className="info fa" dir='rtl'>
            وبحسب بيان منظمة الصحة العالمية ، فإن استخدام المواد الاستهلاكية الطبية هو الحاجة والقلق الأساسي من أجل منع وانتشار جميع أنواع الأمراض والتلوث في المراكز الطبية. في هذا الصدد ، بدأت شركة سایمان طب ، باعتبارها واحدة من أكبر الشركات في إيران ، نشاطها منذ عام 2017 بهدف إنتاج مواد استهلاكية عالية الجودة للمستشفيات
          </div>
        </div>
        <div className="Container SaymanInfo-1">
          <div className="info fa" dir='rtl'>
            وبحسب بيان منظمة الصحة العالمية ، فإن استخدام المواد الاستهلاكية الطبية هو الحاجة والقلق الأساسي من أجل منع وانتشار جميع أنواع الأمراض والتلوث في المراكز الطبية. في هذا الصدد ، بدأت شركة سایمان طب ، باعتبارها واحدة من أكبر الشركات في إيران ، نشاطها منذ عام 2017 بهدف إنتاج مواد استهلاكية عالية الجودة للمستشفيات
          </div>
          <div className="imgContainer">
            <img src="sources/staff-2.jpg.webp" />
          </div>
        </div>
      </div>
      <div className="Products">
        <div className="SaymanInfoTitle">
          منتجات
          <div className='underline'></div>
        </div>
        <div className="Container ProductsBox">
          <ProductsCard img='sources/blouseAndpants.webp' title='بلوزة وسراويل' rtl={true}>
            يستخدم الأطباء والجراحون والمرضى والممرضات العباءات التي تستخدم لمرة واحدة أو العباءات التي تستخدم لمرة واحدة في المناطق عالية الخطورة حيث تكون احتمالية انتقال المرض والفيروسات أعلى ، مثل غرف العمليات ووحدات العناية المركزة ومرضى كورونا ومناطق المستشفى الأخرى عالية الخطورة.
          </ProductsCard>
          <ProductsCard img='sources/surgical.webp' title='جراحة البندقية' rtl={true}>
            يستخدم الأطباء والجراحون والمرضى والممرضات العباءات التي تستخدم لمرة واحدة أو العباءات التي تستخدم لمرة واحدة في المناطق عالية الخطورة حيث تكون احتمالية انتقال المرض والفيروسات أعلى ، مثل غرف العمليات ووحدات العناية المركزة ومرضى كورونا ومناطق المستشفى الأخرى عالية الخطورة.
          </ProductsCard>
          <ProductsCard img='sources/BedShet.webp' title='ملزمة' rtl={true}>
            يستخدم الأطباء والجراحون والمرضى والممرضات العباءات التي تستخدم لمرة واحدة أو العباءات التي تستخدم لمرة واحدة في المناطق عالية الخطورة حيث تكون احتمالية انتقال المرض والفيروسات أعلى ، مثل غرف العمليات ووحدات العناية المركزة ومرضى كورونا ومناطق المستشفى الأخرى عالية الخطورة.
          </ProductsCard>
          <ProductsCard img='sources/PillowCase.webp' title='وسادة' rtl={true}>
            يستخدم الأطباء والجراحون والمرضى والممرضات العباءات التي تستخدم لمرة واحدة أو العباءات التي تستخدم لمرة واحدة في المناطق عالية الخطورة حيث تكون احتمالية انتقال المرض والفيروسات أعلى ، مثل غرف العمليات ووحدات العناية المركزة ومرضى كورونا ومناطق المستشفى الأخرى عالية الخطورة.
          </ProductsCard>
          <ProductsCard img='sources/ShoeCover.webp' title='تغطية الأحذية' rtl={true}>
            يستخدم الأطباء والجراحون والمرضى والممرضات العباءات التي تستخدم لمرة واحدة أو العباءات التي تستخدم لمرة واحدة في المناطق عالية الخطورة حيث تكون احتمالية انتقال المرض والفيروسات أعلى ، مثل غرف العمليات ووحدات العناية المركزة ومرضى كورونا ومناطق المستشفى الأخرى عالية الخطورة.
          </ProductsCard>
          <ProductsCard img='sources/Hat.webp' title='قبعة الأكورديون' rtl={true}>
            يستخدم الأطباء والجراحون والمرضى والممرضات العباءات التي تستخدم لمرة واحدة أو العباءات التي تستخدم لمرة واحدة في المناطق عالية الخطورة حيث تكون احتمالية انتقال المرض والفيروسات أعلى ، مثل غرف العمليات ووحدات العناية المركزة ومرضى كورونا ومناطق المستشفى الأخرى عالية الخطورة.
          </ProductsCard>
        </div>
      </div>
      <div className="Licenses">
        <div className="SaymanInfoTitle">
          أذونات
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
            إيران - كردستان - سنندج - المدينة الصناعية - شارع التعاونية - أمام معمل الحليب          </span>
        </div>
        <hr />
        <span>
          Copyright © 2023 Sayman Teb designed by <a href="https://github.com/Papymankan">Parsa Rostami</a>
        </span>
      </div>
    </div>
  )
}