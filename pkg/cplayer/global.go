package cplayer

import (
	_ "embed"
	"errors"
)

//go:embed template.htm.in
var TemplateHtm string

//go:embed play-live-chat.js
var Playlivechatjs string

//go:embed play-live-chat.js.map
var PlaylivechatjsMap string

//go:embed style.css
var StyleCss string

//go:embed style-dark.css
var StyleDarkCss string

// var option *Option

var ErrNotFoundJson error = errors.New("not found .live_chat.json file")
