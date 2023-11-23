export default function Home() {
  return (
    <div className="container-fluid d-flex h-100">
      <div className="row">
        <div className="col-auto d-flex align-items-center justify-content-center">
          <div className="avatar">
            <div className="image" style={{backgroundImage: "url(/images/_74addc62-dbc5-4b6f-b1be-1ec3a7c68cc5.jpeg)"}} alt="Circular Image"></div>
          </div>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <div>
            <h1 className="mb-3">William Philippe Pires</h1>
            <p>Belgium-based Senior Software Engineer skilled in Azure Cloud, Spring Boot, React, and Next.js. Passionate about crafting efficient solutions and capturing the beauty of Europe through both code and photography.</p>
            <p>
              <a href="https://github.com/wmpires" target="_blank"><img className="ico" src="/images/icons8-github-48.png"/></a>
              <a href="https://linkedin.com/in/wmpires" target="_blank"><img className="ico" src="/images/icons8-linkedin-48.png"/></a>
              <a href="/cv/2023.pdf" target="_blank"><img className="ico" src="/images/icons8-pdf-48.png"/></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}