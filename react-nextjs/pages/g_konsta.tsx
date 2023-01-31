// pages/g_konsta.tsx
import {App, BlockTitle, List, ListItem, Navbar, Page} from "konsta/react";

export default function () {
    return (
        <>
            <App theme={"ios"}>
                <Page>
                    <Navbar title={"list"}/>
                    <BlockTitle>
                        Links, Header, Footer
                    </BlockTitle>
                    <List>
                        <ListItem
                            link
                            title={"John Doe"}
                            header={"Name"}
                            after={"edit"}
                        />
                    </List>
                </Page>
            </App>
        </>
    )
}
