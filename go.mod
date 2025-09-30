module chatplayer

go 1.24.0

toolchain go1.24.7

replace github.com/ting1322/chat-player/pkg/cplayer => ./pkg/cplayer

require github.com/ting1322/chat-player/pkg/cplayer v0.0.0-00010101000000-000000000000

require (
	golang.org/x/crypto v0.42.0 // indirect
	golang.org/x/sys v0.36.0 // indirect
)
