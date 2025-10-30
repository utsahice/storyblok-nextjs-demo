import { renderRichText } from '@storyblok/react'
import { storyblokEditable } from '@storyblok/react'
const Tour = (props: any) => {
  return (
    <main  {...storyblokEditable(props.blok)} className='container mx-auto px-4 w-full pt-30 pb-16'>
      <h1 className='text-3xl md:text-5xl font-bold'>{props.blok.name}</h1>
      <img src={props.blok.main_image.filename} className='mt-12'></img>
      <p className='mt-12 text-lg md:text-2xl md:leading-relaxed'>
        {props.blok.introduction}
      </p>
      <div
  className="prose md:lg mt-16 max-w-auto"
  dangerouslySetInnerHTML={{
    __html: renderRichText(props.blok.body) || "",
  }}
></div>

    </main>
  )
}
export default Tour
