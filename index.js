exports.yodaQuotes = function() {

  var yodaQuotes = [
    "PATIENCE YOU MUST HAVE my young padawan",
    "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
    "Powerful you have become, the dark side I sense in you.",
    "Train yourself to let go of everything you fear to lose.",
    "Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.",
    "Always pass on what you have learned.",
    "You will know (the good from the bad) when you are calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never for attack.",
    "Yes, a Jedi’s strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan’s apprentice.",
    "If you end your training now — if you choose the quick and easy path as Vader did — you will become an agent of evil."
  ]

  return yodaQuotes[Math.floor((Math.random() * yodaQuotes.length))]

}