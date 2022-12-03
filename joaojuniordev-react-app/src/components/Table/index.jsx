import { Table } from 'reactstrap'
import styles from './Table.module.css'
import {tableInfo} from '../../constants/components/table'

const MyTable = (props) => {
    const {
        style={}
    } = props

    return (
        <div className={styles.table} style={style}>
            <Table 
                hover
                responsive
                size="sm"
                striped
            >
                <thead>
                    <tr>
                    {
                        tableInfo.theader.map((th, i)=>{
                            return <th key={i}>{th}</th>
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableInfo.tbody.map((row,i)=>{   
                            return getRow(row)
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

const getRow =(row=[], i)=>{
    return(
        <tr key={i}>
        {
            row.map((th, i)=>{
                const scope = (i===0) ? "row":false
                return <th key={i} scope={scope}>{th}</th>
            })
        }
        </tr>
    )
}

export default MyTable