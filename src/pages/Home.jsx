import hero from '../assets/Images/hero-image.png'
import Card from '../components/Card'
import Image from '../assets/Images/chef-image.png'
import { useState } from 'react'

export default function Home({ data, search }) {

  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [formMessage, setFormMessage] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.message) {
      setFormMessage("")
      setError("All fields required")
      return
    }
    else {
      setError("")
      setFormMessage("Message sent successfully!!!")
      setForm({ name: "", phone: "", message: "" })
    }
  }

  return (
    <>
      <section className="container mt-5 pt-5 hero-page" id="home">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="hero-text">Welcome to SeaDrop</h5>
            <h1 className="display-3">Where Every Meal Feels Like Home</h1>
            <p>From our kitchen to your table, every dish is made from fresh local ingredients and recipes passed down through generations. Come hungry, leave happy.</p>
            <div className="d-flex gap-2">
              <a href="#menu" className="btn-secondary">View Menu</a>
            </div>
          </div>
          <div className="image col-md-6">
            <img src={hero} alt="Grilled lobster platter garnished with fresh herbs and lemon" />
          </div>
        </div>
      </section>

      <section id="menu">
        <div className="container">
          <h2 className="heading text-center mb-5">Popular Dishes</h2>
          {data.length === 0 ? (
            <div className="text-center mb-4">
              <span>
                <i className="heading fa-solid fa-magnifying-glass fs-1 pe-5"></i>
                No results found for {search}
              </span>
            </div>
          ) : (
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {
                data.map((dish, _) => (
                  <div className="card" key={dish.id} >
                    <Card {...dish} />
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </section>

      <section id="story">
        <div className="container">
          <h2 className="heading text-center mb-4">Our Story</h2>
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-5 our-story">
            <div className="story-image">
              <img src={Image} alt="Smiling chef holding a plate of grilled seafood" width={300} />
            </div>
            <div className="story-contents">
              <p>SeaDrop started with a simple idea: great coastal seafood shouldn’t need a trip to the shore. Many of us grew up near the sea, where the best meals began with a fresh catch and a recipe handed down in the family. We wanted to bring that taste to everyone, wherever they are.</p>
              <p>We don’t have a dining room, because our whole kitchen is built for online orders. That lets us focus on what matters: fresh seafood, hand-ground spices and traditional recipes, from Kerala Fish Curry to Pepper Crab Masala, with modern favorites like Butter Garlic Lobster Tail too.</p>
              <p>Browse the menu, choose your dishes and place your order online. We cook it fresh and deliver it to your door, so you can enjoy a meal that tastes like home without leaving yours.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="heading text-center mb-5">Contact</h2>
          <div className="contact-form d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
              <textarea name="message" placeholder="Your Message" rows={3} value={form.message} onChange={handleChange}></textarea>
              <button className="btn-secondary w-100">Send</button>
              <div className="text-center mt-3">
                <span className="form-message">{formMessage}</span>
                <span className="error-message">{error}</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
