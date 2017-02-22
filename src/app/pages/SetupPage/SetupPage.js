class setupPageCtrl {
  /** @ngInject */
  // constructor($scope, $attrs) {
  constructor() {
    this.data = {
      availableOptions: [
        {id: '1', name: 'Option A'},
        {id: '2', name: 'Option B'},
        {id: '3', name: 'Option C'}
      ],
      selectedOption: {id: '3', name: 'Option C'} // This sets the default value of the select in the ui
    };
    this.faqs = [
      {
        id: 1,
        question: 'Why won\'t my PetBot recognize the QR code?',
        type: 'wifi',
        answer: 'When the PetBot successfully recognizes the QR code, it will speak and say thank you. To do this hold your phone still at approximately elbow length away from the front of the petbot. The QR code may take 5-15 seconds to recognize. If the PetBot still is not recognizing the QR code please try setting up the PetBot in a different location, sometimes glare or background lighting can affect the way the QR code is recognized. Once your PetBot is setup, feel free to place it wherever you like within wifi range.'
      },
      {
        id: 2,
        question: 'Where do I put the treats?',
        type: 'treats',
        answer: 'Please remove the top black cover and insert treats there, once treats are inside make sure the cover is snugly attached using the four rubber corner pads.'
      },
      {
        id: 3,
        question: 'Video is in black and white, or too bright, or too dark',
        type: 'video',
        answer: 'When streaming video, swipe left/right to change the video filter, and swipe up/down to change the cameras exposure (brightness).'
      },
      {
        id: 4,
        question: 'Will PetBot support my pet\'s favorite treat?',
        type: 'treats',
        answer: 'We are trying very hard to support all reasonable treat sizes. We have tested with many and are always eager to add support in any way we can to other sizes. A good rule of thumb, is if the treat is smaller then the top of your thumb, its probably going to work without problems.'
      },
      {
        id: 5,
        question: 'Why are too many - or not enough - treats coming out when I press the treat button?',
        type: 'treats',
        answer: 'The only way to control how many treats come out with one touch on your side is to adjust the treat ring, located inside your PetBot under the cylindrical spinner. To gain access to the treat ring, please remove all treats in the device by opening the top and tipping it upside down. Once the treats are out, locate and pull on the treat rings two tabs with your fingers. This should remove both the treat ring and the cylindrical spinner. Re-insert the treat ring to the desired size opening, then re-insert the cylindrical spinner and finally pop back in those treats, and hopefully everything works :) If your find the treats are not coming out the right way please send a video to our support and we will be glad to help you out.'
      },
      {
        id: 6,
        question: 'Why am I not getting any selfies?',
        type: 'selfies',
        answer: 'Selfies are a fantastic feature and help keep you in touch with your pet throughout the day, not just when you want to see them, but also when they happen to be around and want to send you a pick me up! Unfortunately the software brain in your PetBot cannot identify a pet perfectly from all other things that it may see. For example, if you dress up as a dog and walk around in front of the PetBot it should not trigger a selfie, but if you are clever enough you may be able to fool it! For this reason we have added in some basic controls for the PetSelfie. You can find them in the PetBot app, they are Selfie Sensitivity and Motion Sensitivity. By sliding selfie sensitivity to the left, you are telling your PetBot to be consider more things as pets, it\'s more likely to think that your hairy uncle is actually a dog. If you slide it to the right, its telling your PetBot to really only send a selfie when its absolutely certain there is a pet in front of it. A good default setting for this is 0.8, if you are not getting enough selfies try and lower this value, if you are getting too many, try to increase it. The motion slider controls how much ‘motion’ needs to happen before PetBot should even consider sending a selfie.'
      },
      {
        id: 7,
        question: 'How do I change my password?',
        type: 'account',
        answer: 'Please use the app to setup your account again. This will reset the account and change the password.'
      },
      {
        id: 8,
        question: 'How can I tell if someone is using the PetBot?',
        type: 'account',
        answer: 'If someone is actively using the PetBot the light under the PetBot will be completely turned on (solid). If no one is connected to your PetBot but it is online, the PetBot light will slowly glow. If your PetBot is for whatever reason unable to connect to the PetBot servers, the light on the bottom will blink.'
      },
      {
        id: 9,
        question: 'Is my PetBot evil?',
        type: 'account',
        answer: 'No.'
      },
      {
        id: 10,
        question: 'Nothing here answered my question, nothing is working, what do I do?!?',
        type: 'account',
        answer: 'Please take a deep breath, hug your pet, and contact support at <span class="highlight">info@petbot.com</span>. We will be more than happy to assist you in getting your PetBot operational, so that your pet and you can enjoy a healthy connection when you are away from your home.'
      }
    ];
  }
}

export const SetupPage = {
  template: require('./SetupPage.template.html'),
  controller: setupPageCtrl,
  controllerAs: 'setupPageCtrl'
};
