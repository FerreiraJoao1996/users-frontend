import { Grid, Typography } from '@mui/material';
import { Users } from './dto/users';

interface Props {
    data: Users[];
}

function View({ data }: Props) {
    return (
            <Grid container spacing={2}>
                {data.map((item) => (
                    <Grid 
                        xs={12}
                        md={6}
                        lg={3}
                        key={item.id}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 2,
                            borderRadius: "4px",
                            boxShadow: "0px 0px 4px 0px #0000001A",
                        }}
                    >
                        <Typography>{item.name}</Typography>
                        <Typography>{item.salary}</Typography>
                        <Typography>{item.company_value}</Typography>
                    </Grid>
                ))}
            
            </Grid>
    );
}

export default View;
