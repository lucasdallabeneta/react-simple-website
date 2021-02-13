import React from 'react';
import { 
  ServicesContainer, 
  ServicesCard,
  ServicesH1, 
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from './ServicesSectionElements'

function Services(props) {
  return (
    <ServicesContainer id='Services'>

      <ServicesH1>Services</ServicesH1>

      <ServicesWrapper>
        {
          props.services.map((service) => (
            <ServicesCard>
              <ServicesIcon src={service.img}/>
              <ServicesH2>{service.title}</ServicesH2>
              <ServicesP>{service.text}</ServicesP>
            </ServicesCard>
          ))
        }
      </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services;