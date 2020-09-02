import React, { useRef } from "react"
import useNativeLazyLoading from "@charlietango/use-native-lazy-loading"
import { useInView } from "react-intersection-observer"

const CustomImage = ({
  src,
  srcSet,
  sizes,
  aspectratio,
  alt,
  base64,
  presentationwidth,
}) => {
  const imgRef = useRef(null)
  const supportsLazyLoading = useNativeLazyLoading()
  const [wrapperRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "20px 0px",
  })

  return (
    <div
      ref={supportsLazyLoading === false ? wrapperRef : undefined}
      className="image-wrapper"
      style={{
        position: "relative",
        overflow: "hidden",
        // temp background color until I find out how to parse colors from image in a SSR environment
        // or somehow access image node and get colors from `gatsby-plugin-extract-image-color`
        backgroundColor: "#1d1d1d",
      }}
    >
      <div
        style={{
          width: "100%",
          paddingBottom: `${100 / aspectratio}%`,
        }}
      />
      <div
        title={alt}
        style={{
          position: "absolute",
          inset: "0px",
          opacity: "0",
          transitionDelay: "500ms",
        }}
      />
      <img
        src={base64}
        title={alt}
        alt={alt}
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          filter: "blur(50px)", // for a nicer looking blur
          transform: "scale(1)", // this is needed so Safari keeps sharp edges
        }}
      />
      {inView || supportsLazyLoading ? (
        <picture>
          <source srcset={srcSet} />
          <img
            srcset={srcSet}
            src={srcSet.split(",")[0].split(" ")[0]} // get first (lowest quality) entry in srcSet
            sizes={sizes}
            title={alt}
            alt={alt}
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
            loading="lazy"
          />
        </picture>
      ) : null}
      <noscript>
        <picture>
          <source srcset={srcSet} />
          <img
            srcset={srcSet}
            sizes={sizes}
            title={alt}
            alt={alt}
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              opacity: "0",
              transition: "opacity .5s easeOutCirc", // can change timing here
            }}
            loading="lazy"
            ref={imgRef}
            onLoad={() => (imgRef.current.style.opacity = "1")}
          />
        </picture>
      </noscript>
    </div>
  )
}

export default CustomImage