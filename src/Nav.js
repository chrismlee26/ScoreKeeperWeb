import React from 'react';
import './Nav.css';
import AppStore from './images/app-store.svg';

function Nav() {
  return (
    <div>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="logo">
            <a href="#" class="nav-link">
              <span class="link-text logo-text">B A S E B A L L</span>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="32px" height="32px"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"/></svg>
              <span class="link-text">Home</span>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 2 6 L 2 26 L 7 26 L 7 31.09375 L 8.625 29.78125 L 13.34375 26 L 30 26 L 30 6 Z M 4 8 L 28 8 L 28 24 L 12.65625 24 L 12.375 24.21875 L 9 26.90625 L 9 24 L 4 24 Z M 15 10 L 15 12 L 17 12 L 17 10 Z M 15 14 L 15 22 L 17 22 L 17 14 Z"/></svg>
              <span class="link-text">About</span>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="32px" height="32px"><path d="M 7.5332031 2.9765625 C 5.0249242 2.9765625 2.9765625 5.0249242 2.9765625 7.5332031 L 2.9765625 16.421875 C 2.9765625 18.930154 5.0249242 20.978516 7.5332031 20.978516 L 16.421875 20.978516 C 18.930154 20.978516 20.978516 18.930154 20.978516 16.421875 L 20.978516 7.5332031 C 20.978516 5.0249242 18.930154 2.9765625 16.421875 2.9765625 L 7.5332031 2.9765625 z M 7.5332031 4.9765625 L 16.421875 4.9765625 C 17.861596 4.9765625 18.978516 6.0934821 18.978516 7.5332031 L 18.978516 16.421875 C 18.978516 17.861596 17.861596 18.978516 16.421875 18.978516 L 7.5332031 18.978516 C 6.0934821 18.978516 4.9765625 17.861596 4.9765625 16.421875 L 4.9765625 7.5332031 C 4.9765625 6.0934821 6.0934821 4.9765625 7.5332031 4.9765625 z M 6.5 9 A 0.5 0.5 0 0 0 6 9.5 A 0.5 0.5 0 0 0 6.5 10 A 0.5 0.5 0 0 0 7 9.5 A 0.5 0.5 0 0 0 6.5 9 z M 10.5 9 C 8.961 9 8 10.152 8 12 C 8 13.844 8.943 15 10.5 15 C 12.053 15 13 13.84 13 12 C 13 10.156 12.046 9 10.5 9 z M 16 9 C 15.442109 9 14.930338 9.180727 14.564453 9.5292969 C 14.198568 9.8778668 14 10.382639 14 10.927734 C 14 11.458086 14.353792 11.887411 14.726562 12.091797 C 15.099334 12.296183 15.501273 12.382761 15.869141 12.482422 C 16.254472 12.586815 16.604109 12.681691 16.792969 12.785156 C 16.981829 12.888622 17 12.891871 17 13.072266 C 17 13.388803 16.9031 13.598546 16.746094 13.748047 C 16.589087 13.897548 16.350292 14 16 14 C 15.676119 14 15.434132 13.906951 15.273438 13.757812 C 15.112742 13.608676 15 13.390833 15 13 L 14 13 C 14 13.609167 14.215695 14.141325 14.59375 14.492188 C 14.971805 14.843049 15.478881 15 16 15 C 16.557708 15 17.069553 14.821155 17.435547 14.472656 C 17.801541 14.124157 18 13.617728 18 13.072266 C 18 12.54166 17.646328 12.112488 17.273438 11.908203 C 16.900547 11.703918 16.498528 11.617185 16.130859 11.517578 C 15.745727 11.413239 15.396009 11.318458 15.207031 11.214844 C 15.018053 11.11123 15 11.107382 15 10.927734 C 15 10.61183 15.096791 10.401633 15.253906 10.251953 C 15.411022 10.102273 15.649891 10 16 10 C 16.323881 10 16.565867 10.093049 16.726562 10.242188 C 16.887258 10.391324 17 10.609167 17 11 L 18 11 C 18 10.390833 17.784305 9.8586753 17.40625 9.5078125 C 17.028195 9.1569497 16.521119 9 16 9 z M 10.5 10 C 11.805 10 12 11.253 12 12 C 12 12.747 11.805 14 10.5 14 C 9.26 14 9 12.912 9 12 C 9 11.253 9.195 10 10.5 10 z M 6 11 L 6 15 L 7 15 L 7 11 L 6 11 z"/></svg>
              <span class="link-text">Prototype</span>
            </a>
          </li>

          <li class="nav-item">
            <img className="apple-logo"src={ AppStore }></img>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
