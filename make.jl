using Documenter, Highlights
makedocs(
    source  = "src",
    build   = "build",
    format = :html,    
    sitename = "Linux_doc",
    authors = "Michael",
    pages = [
        "Home" => "index.md",
        "hardware" => [
            "hardware/nvidia.md",
            "hardware/mouse.md",
        ],
         "system" => [
            "system/fluxbox.md",
        ],
    
            ],
         "x-window-manager" => [
            "x-window-manager/fluxbox.md",
        ],
    
    
    
    ],
)
