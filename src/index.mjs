import Media from "../util/media.mjs"
import Recorder from "../util/recorder.mjs"
import Controller from "./controller.mjs"
import View from "./view.mjs"

const view = new View()
const media = new Media()
const recorder = new Recorder()

Controller.initialize({
    view,
    media,
    recorder
})