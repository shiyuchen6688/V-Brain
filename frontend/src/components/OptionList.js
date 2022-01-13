import React from "react"
import Option from "./Option"
import { v4 as uuid } from "uuid"

function OptionList() {
    const optionList = [
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1024px-Noto_Emoji_KitKat_263a.svg.png",
            "name": "login",
            "id": uuid()
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1024px-Noto_Emoji_KitKat_263a.svg.png",
            "name": "accuistition",
            "id": uuid()
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1024px-Noto_Emoji_KitKat_263a.svg.png",
            "name": "browse",
            "id": uuid()
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1024px-Noto_Emoji_KitKat_263a.svg.png",
            "name": "links",
            "id": uuid()
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1024px-Noto_Emoji_KitKat_263a.svg.png",
            "name": "resources",
            "id": uuid()
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1024px-Noto_Emoji_KitKat_263a.svg.png",
            "name": "tutorial",
            "id": uuid()
        }
    ]
    const optionComponentList = optionList.map((option) => <Option key={option.id} {...option} />)
    return (
        <div className="ui divided three column grid center aligned" style={{ minHeight: 350, padding: '1em 1em' }}>
            <div class="row">
                {
                    optionComponentList.slice(0, 3)
                }
            </div>
            <div class="row">
                {
                    optionComponentList.slice(3, 7)
                }
            </div>
        </div>
    )


}

export default OptionList
