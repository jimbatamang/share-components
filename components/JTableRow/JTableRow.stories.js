import { storiesOf } from '@storybook/vue'
import JTableRow from './JTableRow'

storiesOf('JTableRow', module)
    .add('normal', () => ({
        components: { JTableRow },
        template:`<JTableRow :values="values" />`,
        data: () => ({
            values: [
                'Jimba Tamang',
                'jimba.tamang@abb.com.au'
            ]
        })
    }))