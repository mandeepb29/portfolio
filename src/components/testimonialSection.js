import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import quoteUpImg from '../images/quote-up.png';
import quoteDownImg from '../images/quote-down.png';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function TestimonialSection() {
  const cardColorsClasses = ['bg-[#FFE5C7]', 'bg-[#F5FFCB]', 'bg-[#E3D2FF]']
  const textColorsClasses = ['text-orange', 'text-green', 'text-purple']

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('owl.carousel').then(() => {
        window.jQuery('.owl-carousel').owlCarousel();
      });
    }
  }, []);


  if(typeof window == 'undefined'){
    return <div></div>
  }

  const data = useStaticQuery(
    graphql`
        query {
          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/src/content/testimonials/"}}) {
            nodes {
              frontmatter {
                title,
                list {
                    content
                    name
                    designation
                    image {
                      childImageSharp {
                        gatsbyImageData(
                          width: 200
                          placeholder: DOMINANT_COLOR
                          ),
                      }
                    }
                }
              }
            }
          }
        }
    `);
  const testimonialsData = data.allMarkdownRemark.nodes[0].frontmatter.list;

  return (
    <section className='testimonial-section bg-light-gr' id='testimonial'>
      <div className="container">
        <h2 className='section-heading section-heading-dark'>
          testimonials
        </h2>
      </div>

      <OwlCarousel className='owl-theme md:mt-8' margin={24} stagePadding={16} items={1} stageOuterClass={'owl-stage-outer md:pt-36 md:-mt-36'} responsive={{
        600:{
          stagePadding:120
        },
        767:{
          items:2,
          stagePadding:40
        },
        1067:{
          items:2,
          stagePadding:140
        },
        1100:{
          items:3,
          stagePadding:0
        },
        1300:{
          items:3,
          stagePadding:120
        }
      }}>
        {
          testimonialsData.map((item, index) => {
            return (
              <div className='item'>
                <div className={`relative overflow-hidden px-8 md:px-12 pt-8 md:pt-16 pb-6 md:pb-8 
                rounded-tr-[3.25rem] rounded-tl-[2.375rem] rounded-br-[2.375rem] rounded-bl-[3.25rem]
                md:rounded-tr-[6.25rem] md:rounded-tl-[4.375rem] md:rounded-br-[4.375rem] md:rounded-bl-[6.25rem] 
                ${cardColorsClasses[index % (testimonialsData.length - 1)]} 
                ${index % 2 != 0 ? 'lg:-translate-y-16' : ''}`}>
                  <img src={quoteUpImg} alt="quote up" className='absolute left-0 top-4 !w-24' />
                  <img src={quoteDownImg} alt="quote down" className='absolute right-0 bottom-4 !w-36' />
                  <div>
                    <p className='text-black text-sm leading-loose font-medium'>
                      {item.content}
                    </p>

                    <div className='flex gap-4 mt-8 md:mt-12 items-center'>
                      <GatsbyImage className='h-[4.5rem] w-[4.5rem] min-h-[4.5rem] min-w-[4.5rem] p-4 shadow-xl rounded-full border-4 border-white grow-0' image={getImage(item?.image?.childImageSharp?.gatsbyImageData)} alt={`${item.name}, ${item.designation}`} />

                      <div className='grow'>
                        <h4 className={`text-lg font-semibold ${textColorsClasses[index % (testimonialsData.length - 1)]}`} >
                          {item.name}
                        </h4>

                        <p className='text-darkgrey font-medium font-syne leading-tight'>
                          {item.designation}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            )
          }
          )}
      </OwlCarousel>;
    </section>
  )
}

export default TestimonialSection