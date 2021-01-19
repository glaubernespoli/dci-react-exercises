/**
 * NOTE ABOUT THE imagePath FIELD: just a test with public folder. react good practices says assets should 
 * be imported
 * with the JS so the assets are bundled within the webpack, thus avoiding extra network requests
 * more can be read here: https://create-react-app.dev/docs/using-the-public-folder/
 */
export default class Light {
    imagePath;
    imageAlt;
    switchButton;
    lightOn;

    constructor(lightOn, imagePath, imageAlt, switchButton) {
        this.lightOn = lightOn;
        this.imagePath = imagePath;
        this.imageAlt = imageAlt;
        this.switchButton = switchButton;
    }

    
    static on = new Light(
        true,
        "/img/pic_bulbon.gif",
        "The Bulb is On",
        "OFF"
    );

    static off = new Light(
        false,
        "/img/pic_bulboff.gif",
        "The Bulb is Off",
        "ON"
  ) 

  switch = () => this.lightOn ? Light.off : Light.on;
}
