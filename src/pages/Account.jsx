const Account = () => {
  return (
    <div class="user-view">
      <nav class="user-view__menu">
        <ul class="side-nav">
          <li class="side-nave--active">
            <a href="/">
              <svg width="19" height="19" viewBox="0 0 26 26">
                <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4zM12 14c-1.1 0-2-0.9-2-2s0.9-2 2-2c1.1 0 2 0.9 2 2s-0.9 2-2 2z"></path>
                <path d="M20.3 15.4c0.1-0.2 0.3-0.4 0.7-0.4 1.7 0 3-1.3 3-3s-1.3-3-3-3h-0.2c-0.2 0-0.4-0.1-0.5-0.3 0-0.1 0-0.1-0.1-0.2-0.1-0.2-0.1-0.5 0.2-0.8 1.2-1.2 1.2-3.1 0-4.2v0c0 0 0 0 0 0-0.6-0.6-1.3-0.9-2.1-0.9 0 0 0 0 0 0-0.8 0-1.6 0.3-2.2 0.9-0.2 0.2-0.5 0.2-0.7 0.1-0.2 0-0.4-0.3-0.4-0.6 0-1.7-1.3-3-3-3s-3 1.3-3 3v0.2c0 0.2-0.1 0.4-0.3 0.5-0.1 0-0.1 0-0.2 0.1-0.2 0.1-0.5 0-0.8-0.2-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0.1 4.3 0.2 0.2 0.2 0.5 0.1 0.8-0.1 0.2-0.4 0.4-0.7 0.4-1.7 0-3 1.3-3 3s1.3 3 3 3h0.2c0.3 0 0.5 0.2 0.6 0.4s0.1 0.5-0.2 0.8c-0.6 0.6-0.9 1.3-0.9 2.1s0.3 1.5 0.9 2.1c0 0 0 0 0 0 1.2 1.2 3.1 1.2 4.3-0.1 0.2-0.2 0.5-0.2 0.8-0.1s0.4 0.3 0.4 0.7c0 1.7 1.3 3 3 3s3-1.3 3-3v-0.2c0-0.3 0.2-0.5 0.4-0.6s0.5-0.1 0.8 0.2c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1-0.1-4.3-0.1-0.2-0.2-0.5-0.1-0.7 0 0 0 0 0 0zM18.5 14.6c-0.4 1-0.2 2.1 0.6 3 0.2 0.2 0.3 0.4 0.3 0.7s-0.1 0.5-0.3 0.7c-0.2 0.2-0.4 0.3-0.7 0.3 0 0 0 0 0 0-0.3 0-0.5-0.1-0.8-0.4-0.8-0.8-1.9-1-2.9-0.5-1 0.4-1.6 1.4-1.6 2.4v0.2c0 0.6-0.4 1-1 1s-1-0.4-1-1c0 0 0-0.1 0-0.1 0-1.1-0.7-2-1.7-2.4-0.3-0.2-0.7-0.2-1.1-0.2-0.7 0-1.4 0.3-1.9 0.8-0.4 0.4-1 0.4-1.4 0 0 0 0 0 0 0v0c-0.2-0.2-0.3-0.4-0.3-0.7s0.1-0.5 0.4-0.8c0.8-0.8 1-1.9 0.5-2.9-0.4-1-1.4-1.6-2.4-1.6h-0.2c-0.6 0-1-0.4-1-1s0.4-1 1-1c0 0 0.1 0 0.1 0 1.1 0 2-0.7 2.4-1.7s0.2-2.1-0.6-3c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.5 0.1c0.7 0.7 1.8 0.9 2.7 0.6 0.1 0 0.2 0 0.3-0.1 1-0.4 1.6-1.4 1.6-2.4v-0.2c0-0.6 0.4-1 1-1s1 0.4 1 1.1c0 1.1 0.6 2 1.6 2.4s2.1 0.2 3-0.6c0.2-0.2 0.4-0.3 0.7-0.3v0c0.3 0 0.5 0.1 0.7 0.3 0 0 0 0 0 0 0.4 0.4 0.4 1-0.1 1.5-0.7 0.7-0.9 1.8-0.6 2.7 0 0.1 0 0.2 0.1 0.3 0.4 1 1.4 1.6 2.4 1.6h0.2c0.6 0 1 0.4 1 1s-0.4 1-1.1 1c-1 0-2 0.6-2.4 1.6z"></path>
              </svg>
              Settings
            </a>
          </li>
          <li>
            <a href="/my-tours">
              <svg width="19" height="19" viewBox="0 0 26 26">
                <path d="M20 6h-3v-1c0-1.7-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3v1h-3c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3v-10c0-1.7-1.3-3-3-3zM9 5c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v1h-6v-1zM15 8v12h-6v-12h6zM3 19v-10c0-0.6 0.4-1 1-1h3v12h-3c-0.6 0-1-0.4-1-1zM21 19c0 0.6-0.4 1-1 1h-3v-12h3c0.6 0 1 0.4 1 1v10z"></path>
              </svg>
              My bookings
            </a>
          </li>
          <li>
            <a href="/">
              <svg width="19" height="19" viewBox="0 0 26 26">
                <path d="M23 9c-0.1-0.4-0.4-0.6-0.8-0.7l-6.4-0.9-2.9-5.8c-0.3-0.7-1.5-0.7-1.8 0l-2.9 5.7-6.3 1c-0.4 0-0.7 0.3-0.9 0.7-0.1 0.4 0 0.8 0.3 1l4.6 4.5-1.1 6.4c-0.1 0.4 0.1 0.8 0.4 1s0.7 0.3 1.1 0.1l5.7-3 5.7 3c0.2 0 0.3 0 0.5 0s0.4-0.1 0.6-0.2c0.3-0.2 0.5-0.6 0.4-1l-1.1-6.4 4.6-4.5c0.3-0.2 0.4-0.6 0.3-0.9zM16.3 13.4c-0.2 0.3-0.3 0.6-0.3 0.9l0.8 4.9-4.4-2.3c-0.3-0.2-0.6-0.2-0.9 0l-4.4 2.3 0.9-4.9c0-0.3-0.1-0.6-0.3-0.9l-3.6-3.4 4.9-0.7c0.3 0 0.6-0.3 0.8-0.5l2.2-4.5 2.2 4.4c0.1 0.3 0.4 0.5 0.8 0.5l4.9 0.7-3.6 3.5z"></path>
              </svg>
              My reviews
            </a>
          </li>
          <li>
            <a href="/">
              <svg width="19" height="19" viewBox="0 0 26 26">
                <path d="M21 3h-18c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zM3 5h18c0.6 0 1 0.4 1 1v3h-20v-3c0-0.6 0.4-1 1-1zM21 19h-18c-0.6 0-1-0.4-1-1v-7h20v7c0 0.6-0.4 1-1 1z"></path>
              </svg>
              Billing
            </a>
          </li>
        </ul>
        <div class="admin-nav">
          <h5 class="admin-nav__heading">Admin</h5>
          <ul class="side-nav">
            <li>
              <a href="/">
                <svg width="19" height="19" viewBox="0 0 26 26">
                  <path d="M23.5 1.1c-0.3-0.2-0.7-0.2-1 0l-6.5 3.8-7.6-3.8c0 0 0 0 0 0s0 0-0.1 0c-0.1-0.1-0.2-0.1-0.3-0.1 0 0 0 0 0 0s0 0 0 0c-0.1 0-0.2 0-0.4 0.1 0 0 0 0-0.1 0 0 0-0.1 0-0.1 0l-7 4c-0.2 0.2-0.4 0.5-0.4 0.9v16c0 0.4 0.2 0.7 0.5 0.9s0.7 0.2 1 0l6.5-3.8 7.5 3.8c0 0 0 0 0 0 0.2 0.1 0.3 0.1 0.5 0.1 0.1 0 0.2 0 0.3-0.1 0 0 0.1 0 0.1 0s0 0 0.1 0l7-4c0.3-0.2 0.5-0.5 0.5-0.9v-16c0-0.4-0.2-0.7-0.5-0.9zM9 3.6l6 3v13.8l-6-3v-13.8zM2 6.6l5-2.9v13.7l-5 2.9v-13.7zM22 17.4l-5 2.9v-13.7l5-2.9v13.7z"></path>
                </svg>
                Manage tours
              </a>
            </li>
            <li>
              <a href="/">
                <svg width="19" height="19" viewBox="0 0 26 26">
                  <path d="M13 14h-8c-2.8 0-5 2.2-5 5v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-2.8-2.2-5-5-5z"></path>
                  <path d="M9 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM9 4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"></path>
                  <path d="M20.2 14.2c-0.5-0.1-1.1 0.2-1.2 0.7s0.2 1.1 0.7 1.2c1.3 0.3 2.2 1.5 2.2 2.9v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0.1-2.3-1.4-4.3-3.7-4.8z"></path>
                  <path d="M16.2 2.2c-0.5-0.2-1 0.1-1.2 0.7-0.1 0.5 0.2 1.1 0.7 1.2 1.6 0.4 2.6 2 2.2 3.7-0.3 1.1-1.1 1.9-2.2 2.2-0.5 0.1-0.9 0.7-0.7 1.2 0.1 0.5 0.5 0.8 1 0.8 0.1 0 0.2 0 0.2 0 1.8-0.5 3.2-1.8 3.6-3.6 0.7-2.8-0.9-5.6-3.6-6.2z"></path>
                </svg>
                Manage users
              </a>
            </li>
            <li>
              <a href="/">
                <svg width="19" height="19" viewBox="0 0 26 26">
                  <path d="M23 9c-0.1-0.4-0.4-0.6-0.8-0.7l-6.4-0.9-2.9-5.8c-0.3-0.7-1.5-0.7-1.8 0l-2.9 5.7-6.3 1c-0.4 0-0.7 0.3-0.9 0.7-0.1 0.4 0 0.8 0.3 1l4.6 4.5-1.1 6.4c-0.1 0.4 0.1 0.8 0.4 1s0.7 0.3 1.1 0.1l5.7-3 5.7 3c0.2 0 0.3 0 0.5 0s0.4-0.1 0.6-0.2c0.3-0.2 0.5-0.6 0.4-1l-1.1-6.4 4.6-4.5c0.3-0.2 0.4-0.6 0.3-0.9zM16.3 13.4c-0.2 0.3-0.3 0.6-0.3 0.9l0.8 4.9-4.4-2.3c-0.3-0.2-0.6-0.2-0.9 0l-4.4 2.3 0.9-4.9c0-0.3-0.1-0.6-0.3-0.9l-3.6-3.4 4.9-0.7c0.3 0 0.6-0.3 0.8-0.5l2.2-4.5 2.2 4.4c0.1 0.3 0.4 0.5 0.8 0.5l4.9 0.7-3.6 3.5z"></path>
                </svg>
                Manage reviews
              </a>
            </li>
            <li>
              <a href="/">
                <svg width="19" height="19" viewBox="0 0 26 26">
                  <path d="M20 6h-3v-1c0-1.7-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3v1h-3c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3v-10c0-1.7-1.3-3-3-3zM9 5c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v1h-6v-1zM15 8v12h-6v-12h6zM3 19v-10c0-0.6 0.4-1 1-1h3v12h-3c-0.6 0-1-0.4-1-1zM21 19c0 0.6-0.4 1-1 1h-3v-12h3c0.6 0 1 0.4 1 1v10z"></path>
                </svg>
                Manage bookings
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="user-view__content">
        <div class="user-view__form-container">
          <h2 class="heading-secondary ma-bt-md">Your account settings</h2>
          <form class="form form-user-data">
            <div class="form__group">
              <label class="form__label" for="name">
                Name
              </label>
              <input
                class="form__input"
                id="name"
                type="text"
                value="Austin Parvin"
                required=""
                name="name"
              />
            </div>
            <div class="form__group ma-bt-md">
              <label class="form__label" for="email">
                Email address
              </label>
              <input
                class="form__input"
                id="email"
                type="email"
                value="austin.parvin@gmail.com"
                required=""
                name="email"
              />
            </div>
            <div class="form__group form__photo-upload">
              <img
                class="form__user-photo"
                src="/user-6418485dfef8e0bab2a864af-1679313247700.jpeg"
                alt="User photo"
              />
              <input
                class="form__upload"
                type="file"
                accept="image/*"
                id="photo"
                name="photo"
              />
              <label for="photo">Choose new photo</label>
            </div>
            <div class="form__group right">
              <button class="btn btn--small btn--green">Save settings</button>
            </div>
          </form>
        </div>
        <div class="line">&nbsp;</div>
        <div class="user-view__form-container">
          <h2 class="heading-secondary ma-bt-md">Password change</h2>
          <form class="form form-user-password">
            <div class="form__group">
              <label class="form__label" for="password-current">
                Current password
              </label>
              <input
                class="form__input"
                id="password-current"
                type="password"
                placeholder="••••••••"
                required=""
                minlength="8"
                name="password-current"
                // style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAmJJREFUWAntV7uKIkEUvbYGM4KID3wEIgjKRLLpKGLgFwiCfslGhkb7IbLgAzE1GhMxWxRRBEEwmEgDERWfW6fXuttq60a2wU6B1qlzb9U5fatsKROJVigUArvd7oeAyePx6Af3qGYymT7F2h8Wi+V7Pp+fmE7iv4Sw81GieusKIzNh4puCJzdaHIagCW1F4KSeQ4O4pPLoPb/3INBGBZ7avgz8fxWIxWIUCoX43Blegbe3NwoGg88zwMoncFUB8Yokj8dDdrv9MpfHVquV/H4/iVcpc1qgKAp5vV6y2WxaWhefreB0OimXy6kGkD0YDKhSqdB2u+XJqVSK4vE4QWS5XKrx0WjEcZ/PR9lslhwOh8p1Oh2q1Wp0OBw4RwvOKpBOp1kcSdivZPLvmxrjRCKhiiOOSmQyGXp5ecFQbRhLcRDRaJTe39//BHW+2cDr6ysFAoGrlEgkwpwWS1I7z+VykdvtliHuw+Ew40vABvb7Pf6hLuMk/rGY02ImBZC8dqv04lpOYjaw2WzUPZcB2WMPZet2u1cmZ7MZTSYTNWU+n9N4PJbp3GvXYPIE2ADG9Xqder2e+kTr9ZqazSa1222eA6FqtUoQwqHCuFgscgWQWC6XaTgcEiqKQ9poNOiegbNfwWq1olKppB6yW6cWVcDHbDarIuzuBBaLhWrqVvwy/6wCMnhLXMbR4wnvtX/F5VxdAzJoRH+2BUYItlotmk6nLGW4gX6/z+IAT9+CLwPPr8DprnZ2MIwaQBsV+DBKUEfnQ8EtFRdFneBDKWhCW8EVGbdUQfxESR6qKhaHBrSgCe3fbLTpPlS70M0AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;'
              />
            </div>
            <div class="form__group">
              <label class="form__label" for="password">
                New password
              </label>
              <input
                class="form__input"
                id="password"
                type="password"
                placeholder="••••••••"
                required=""
                minlength="8"
                name="password"
                // style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABKRJREFUWAnNl0tsVGUUxzvTTlslZUaCloZHY6BRFkp9sDBuqgINpaBp02dIDImwKDG6ICQ8jBYlhg0rxUBYEALTpulMgBlqOqHRDSikJkZdGG0CRqAGUuwDovQ1/s7NPTffnTu3zMxGvuT2vP7n8Z3vu+dOi4r+5xUoJH8sFquamZmpTqfTVeIfCARGQ6HQH83NzaP5xsu5gL6+vuVzc3NdJN1Kkhd8Ev1MMYni4uJjra2tt3wwLvUjCxgYGFg8Pj7+MV5dPOUub3/hX0zHIpFId0NDw6Q/jO4tZOzv76+Znp6+AOb5TBw7/YduWC2Hr4J/IhOD/GswGHy7vb39tyw2S+VbAC1/ZXZ29hKoiOE8RrIvaPE5WvyjoS8CX8sRvYPufYpZYtjGS0pKNoD/wdA5bNYCCLaMYMMEWq5IEn8ZDof3P6ql9pF9jp8cma6bFLGeIv5ShdISZUzKzqPIVnISp3l20caTJsaPtwvc3dPTIx06ziZkkyvY0FnoW5l+ng7guAWnpAI5w4MkP6yy0GQy+dTU1JToGm19sqKi4kBjY+PftmwRYn1ErEOq4+i2tLW1DagsNGgKNv+p6tj595nJxUbyOIF38AwipoSfnJyMqZ9SfD8jxlWV5+fnu5VX6iqgt7d3NcFeUiN0n8FbLEOoGkwdgY90dnbu7OjoeE94jG9wd1aZePRp5AOqw+9VMM+qLNRVABXKkLEWzn8S/FtbdAhnuVQE7LdVafBPq04pMYawO0OJ+6XHZkFcBQA0J1xKgyhlB0EChEWGX8RulsgjvOjEBu+5V+icWOSoFawuVwEordluG28oSCmXSs55SGSCHiXhmDzC25ghMHGbdwhJr6sAdpnyQl0FYIyoEX5CeYOuNHg/NhvGiUUxVgfV2VUAxjtqgPecp9oKoE4sNnbX9HcVgMH8nD5nAoWnKM/5ZmKyySRdq3pCmDncR4DxOwVC64eHh0OGLOcur1Vey46xUZ3IcVl5oa4OlJaWXgQwJwZyhUdGRjqE14VtSnk/mokhxnawiwUvsZmsX5u+rgKamprGMDoA5sKhRCLxpDowSpsJ8vpCj2AUPzg4uIiNfKIyNMkH6Z4hF3k+RgTYz6vVAEiKq2bsniZIC0nTtvMVMwBzoBT9tKkTHp8Ak1V8dTrOE+NgJs7VATESTH5WnVAgfHUqlXK6oHpJEI1G9zEZH/Du16leqHyS0UXBNKmeOMf5NvyislJPB8RAFz4g8IuwofLy8k319fUP1EEouw7L7mC3kUTO1nn3sb02MTFxFpsz87FfJuaH4pu5fF+reDz+DEfxkI44Q0ScSbyOpDGe1RqMBN08o+ha0L0JdeKi/6msrGwj98uZMeon1AGaSj+elr9LwK9IkO33n8cN7Hl2vp1N3PcYbUXOBbDz9bwV1/wCmXoS3+B128OPD/l2LLg8l9APXVlZKZfzfDY7ehlQv0PPQDez6zW5JJdYOXdAwHK2dGIv7GH4YtHJIvEOvvunLCHPPzl3QOLKTkl0hPbKaDUvlTU988xtwfMqQBPQ3m/4mf0yBVlDCSr/CRW0CipAMnGzb9XU1NSRvIX7kSgo++Pg9B8wltxxbHKPZgAAAABJRU5ErkJggg=="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;'
              />
            </div>
            <div class="form__group ma-bt-lg">
              <label class="form__label" for="password-confirm">
                Confirm password
              </label>
              <input
                class="form__input"
                id="password-confirm"
                type="password"
                placeholder="••••••••"
                required=""
                minlength="8"
                name="password-confirm"
                // style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABKRJREFUWAnNl0tsVGUUxzvTTlslZUaCloZHY6BRFkp9sDBuqgINpaBp02dIDImwKDG6ICQ8jBYlhg0rxUBYEALTpulMgBlqOqHRDSikJkZdGG0CRqAGUuwDovQ1/s7NPTffnTu3zMxGvuT2vP7n8Z3vu+dOi4r+5xUoJH8sFquamZmpTqfTVeIfCARGQ6HQH83NzaP5xsu5gL6+vuVzc3NdJN1Kkhd8Ev1MMYni4uJjra2tt3wwLvUjCxgYGFg8Pj7+MV5dPOUub3/hX0zHIpFId0NDw6Q/jO4tZOzv76+Znp6+AOb5TBw7/YduWC2Hr4J/IhOD/GswGHy7vb39tyw2S+VbAC1/ZXZ29hKoiOE8RrIvaPE5WvyjoS8CX8sRvYPufYpZYtjGS0pKNoD/wdA5bNYCCLaMYMMEWq5IEn8ZDof3P6ql9pF9jp8cma6bFLGeIv5ShdISZUzKzqPIVnISp3l20caTJsaPtwvc3dPTIx06ziZkkyvY0FnoW5l+ng7guAWnpAI5w4MkP6yy0GQy+dTU1JToGm19sqKi4kBjY+PftmwRYn1ErEOq4+i2tLW1DagsNGgKNv+p6tj595nJxUbyOIF38AwipoSfnJyMqZ9SfD8jxlWV5+fnu5VX6iqgt7d3NcFeUiN0n8FbLEOoGkwdgY90dnbu7OjoeE94jG9wd1aZePRp5AOqw+9VMM+qLNRVABXKkLEWzn8S/FtbdAhnuVQE7LdVafBPq04pMYawO0OJ+6XHZkFcBQA0J1xKgyhlB0EChEWGX8RulsgjvOjEBu+5V+icWOSoFawuVwEordluG28oSCmXSs55SGSCHiXhmDzC25ghMHGbdwhJr6sAdpnyQl0FYIyoEX5CeYOuNHg/NhvGiUUxVgfV2VUAxjtqgPecp9oKoE4sNnbX9HcVgMH8nD5nAoWnKM/5ZmKyySRdq3pCmDncR4DxOwVC64eHh0OGLOcur1Vey46xUZ3IcVl5oa4OlJaWXgQwJwZyhUdGRjqE14VtSnk/mokhxnawiwUvsZmsX5u+rgKamprGMDoA5sKhRCLxpDowSpsJ8vpCj2AUPzg4uIiNfKIyNMkH6Z4hF3k+RgTYz6vVAEiKq2bsniZIC0nTtvMVMwBzoBT9tKkTHp8Ak1V8dTrOE+NgJs7VATESTH5WnVAgfHUqlXK6oHpJEI1G9zEZH/Du16leqHyS0UXBNKmeOMf5NvyislJPB8RAFz4g8IuwofLy8k319fUP1EEouw7L7mC3kUTO1nn3sb02MTFxFpsz87FfJuaH4pu5fF+reDz+DEfxkI44Q0ScSbyOpDGe1RqMBN08o+ha0L0JdeKi/6msrGwj98uZMeon1AGaSj+elr9LwK9IkO33n8cN7Hl2vp1N3PcYbUXOBbDz9bwV1/wCmXoS3+B128OPD/l2LLg8l9APXVlZKZfzfDY7ehlQv0PPQDez6zW5JJdYOXdAwHK2dGIv7GH4YtHJIvEOvvunLCHPPzl3QOLKTkl0hPbKaDUvlTU988xtwfMqQBPQ3m/4mf0yBVlDCSr/CRW0CipAMnGzb9XU1NSRvIX7kSgo++Pg9B8wltxxbHKPZgAAAABJRU5ErkJggg=="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;'
              />
            </div>
            <div class="form__group right">
              <button class="btn btn--small btn--green" id="btn--save-password">
                Save password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
