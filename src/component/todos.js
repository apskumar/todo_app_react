
import { IconButton, Input, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { createTheme } from "@mui/system";
import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./style"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { create_todos, delete_todos, get_todo, update_todos } from "../store/actions";

const Todos = () => {
    const [value, setValue] = useState(false);
    const [data, setData] = useState("");
    const dispatch = useDispatch();
    const [hasChange,setHasChange] = useState(false);
    const loading = useSelector(state=>state.loading);
    const list = useSelector(state=>state.data);

    const handleModal = () => {
        setValue(null);
        dispatch(create_todos({post:data,status:"new"}));
        setHasChange(true);
    }

    useEffect(()=>{
        if(!loading&& hasChange){
            dispatch(get_todo());
            setHasChange(false);
        }
    },[loading]);

    useEffect(()=>{
        dispatch(get_todo());
    },[]);

    const CustomTableCell = ({ row, name, onChange }) => {
        const classes = useStyles();
        const { _id } = row;
        return (
            <TableCell align="left" className={classes.tableCell}>
                {_id == selected?._id ? (
                    <Input
                        value={selected[name]}
                        name={name}
                        onChange={e => onChange(e)}
                        className={classes.input}
                    />
                ) : (
                    row[name]
                )}
            </TableCell>
        );
    };

    const [rows, setRows] = useState([
    ]);
    const [previous, setPrevious] = useState({});
    const [selected,setSelected] = useState(null);
    const classes = useStyles();

    const update =(row)=>{
       dispatch(update_todos(selected));
       setHasChange(false);
    }

    const onDeleteMode = id => {
       dispatch(delete_todos(id));
    };


    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setSelected((prev)=> { return {...prev,[name]:value}} );
    };

    const onRevert = id => {
        const newRows = rows.map(row => {
            if (row.id === id) {
                return previous[id] ? previous[id] : row;
            }
            return row;
        });
        setRows(newRows);
        setPrevious(state => {
            delete state[id];
            return state;
        });
    };
    const theme = createTheme();

    return (
        <div>
            <div className="modalClass">
                
            </div>
            <div>
                <Modal show={value} onHide={()=>{setValue(null)}}>
                    <Modal.Header style={{background:'#0b5ed7',color:'white',fontWeight:'bold'}} closeButton >Add Item</Modal.Header>
                    <Modal.Body>
                        <TextField style={{height:'100%',width:'100%'}} label={"ToDos"} onChange={(event) => { setData(event.target.value); }}></TextField>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{setValue(null)}}>Close</Button>
                        <Button onClick={handleModal}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <>
                <Paper className={classes.root}>
                <Button style={{float:'right'}} onClick={()=>{setValue("create")}}>Add Item</Button>
                    <Table className={classes.table} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">S.No</TableCell>
                                <TableCell align="left">Post</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(list??[]).map((row,idx) => (
                                <TableRow key={row.id}>
                                    <TableCell align="left" style={{width:'100px'}}>{idx+1}</TableCell>
                                    <CustomTableCell {...{ row, name: "post", onChange }} />
                                    <CustomTableCell {...{ row, name: "status", onChange }} />
                                    <TableCell className={classes.selectTableCell}>
                                        {row._id==selected?._id ? (
                                            <>
                                                <IconButton
                                                    aria-label="done"
                                                    onClick={() => update(row)}
                                                >
                                                    <DoneIcon />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="revert"
                                                    onClick={() => setSelected(null)}
                                                >
                                                    <RevertIcon />
                                                </IconButton>
                                            </>
                                        ) : (
                                            <IconButton
                                                aria-label="delete"
                                                onClick={() => setSelected(row)}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        )}
                                    </TableCell>
                                    <TableCell className={classes.selectTableCell}>

                                        <>

                                            <IconButton
                                                aria-label="revert"
                                                onClick={() => onDeleteMode(row._id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>

            </>
        </div>

    )
}

export default Todos;