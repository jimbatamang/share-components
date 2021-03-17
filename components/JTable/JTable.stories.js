import { storiesOf } from '@storybook/vue'
import JTable from './JTable'

var items = [
    [ 'Yair Lamb', 'yair.lamb@email.com' ],
    [ 'Leonardo Payne', 'leonardo.payne@email.com' ],
    [ 'Carl Henson', 'carl.henson@email.com' ],
    [ 'Jensen Combs', 'jensen.combs@email.com' ],
    [ 'Amiah Burton', 'amiah.burton@email.com' ],
    [ 'Yaretzi Mayo', 'yaretzi.mayo@email.com' ],
    [ 'Kamren Huffman', 'kamren.huffman@email.com' ]
  ]
  
  storiesOf('JTable', module)
    .add('with data', () => ({
      components: { JTable },
      template:
      `
        <JTable
            :items="items"
        />
      `,
      data: () => ({
        items
      })
    }))
    .add('with data and header', () => ({
        components: { JTable },
        template:
        `<JTable :header="header" :items="items" />`,
        data: () => ({
            header: [
                'Name',
                'Email'
            ],
            items
        })
    }))