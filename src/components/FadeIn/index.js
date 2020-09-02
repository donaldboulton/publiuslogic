import React from 'react'

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
function FadeInSection() {
  return (
   <FadeInSection>
  <h1>This will fade in</h1>
</FadeInSection>

<FadeInSection>
  <p>This will fade in too!</p>
</FadeInSection>

<FadeInSection>
  <img src="/img/logo.png" alt="fade in, this will" />
</FadeInSection>
  );
}

export const FadeInSection