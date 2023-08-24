import React from 'react'
import './English.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ProductsCard from '../../Components/ProductsCard/ProductsCard';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import FactoryIcon from '@mui/icons-material/Factory';

export default function English() {
  return (
    <div className='English'>
      <div className='DeliveryItems'>
        <div className="Container" id='DeliveryContainer'>
          <div className='DeliveryItem'>
            <LocalShippingIcon />
            Fast Delivery
          </div>
          <div className='DeliveryItem'>
            <SupportAgentIcon />
            24/7 Support
          </div>
          <div className='DeliveryItem'>
            <EngineeringIcon />
            Experienced staff
          </div>
        </div>
      </div>
      <div className="SaymanInfos">
        <div className="SaymanInfoTitle">
          Our Expertise
          <div className='underline'></div>
        </div>
        <div className="Container SaymanInfo-1">
          <div className="imgContainer">
            <img src="sources/staff-1.jpg.webp" />
          </div>
          <div className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit debitis quo recusandae, laborum, fugiat voluptatem minus ipsum et nulla veritatis dignissimos animi ducimus possimus placeat molestiae ratione sit quas.</div>
        </div>
        <div className="Container SaymanInfo-1">
          <div className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit debitis quo recusandae, laborum, fugiat voluptatem minus ipsum et nulla veritatis dignissimos animi ducimus possimus placeat molestiae ratione sit quas.</div>
          <div className="imgContainer">
            <img src="sources/staff-2.jpg.webp" />
          </div>
        </div>
      </div>
      <div className="Products">
        <div className="SaymanInfoTitle">
          Products
          <div className='underline'></div>
        </div>
        <div className="Container ProductsBox">
          <ProductsCard img='sources/blouseAndpants.webp' title='Blouse And Pants'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus harum quasi magni similique iste recusandae. Facere sint rem optio, quaerat earum est repellendus, veritatis voluptas repellat amet dolorum delectus.
          </ProductsCard>
          <ProductsCard img='sources/surgical.webp' title='Disposable Surgical Gown'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus harum quasi magni similique iste recusandae. Facere sint rem optio, quaerat earum est repellendus, veritatis voluptas repellat amet dolorum delectus.
          </ProductsCard>
          <ProductsCard img='sources/BedShet.webp' title='Disposable Bed Sheet'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus harum quasi magni similique iste recusandae. Facere sint rem optio, quaerat earum est repellendus, veritatis voluptas repellat amet dolorum delectus.
          </ProductsCard>
          <ProductsCard img='sources/PillowCase.webp' title='Disposable Pillow Case'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus harum quasi magni similique iste recusandae. Facere sint rem optio, quaerat earum est repellendus, veritatis voluptas repellat amet dolorum delectus.
          </ProductsCard>
          <ProductsCard img='sources/ShoeCover.webp' title='Shoe Cover'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus harum quasi magni similique iste recusandae. Facere sint rem optio, quaerat earum est repellendus, veritatis voluptas repellat amet dolorum delectus.
          </ProductsCard>
          <ProductsCard img='sources/Hat.webp' title='Accardion Hat'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus harum quasi magni similique iste recusandae. Facere sint rem optio, quaerat earum est repellendus, veritatis voluptas repellat amet dolorum delectus.
          </ProductsCard>
        </div>
      </div>
      <div className="Licenses">
        <div className="SaymanInfoTitle">
          Licenses
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
          <span>
            <FactoryIcon />
            Industrial Town No.1 , Tavoon road , Sanandaj , Iran
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