import { times } from 'lodash'

export const ideas = times(100, (i) => ({
  nick: `cool-idea-nick-${i}`,
  name: `Idea ${i}`,
  description: `Idea ${i} description`,
  text: times(100, (j) => `<p>Idea ${i} text ${j}</p>`).join(''),
}))