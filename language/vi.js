module.exports = {
    cmd: {
        welcome: () => `----- Chào mừng bạn đến với bộ điều khiển HighwayBot -----`,
        // Command
        commands: () => `Nhập:\n` +
            `> 'help' để biết danh sách lệnh` +
            `> 'language <viết tắt của ngôn ngữ của bạn (như: 'en', 'vi',...)>' để đổi ngôn ngữ mặc định` +
            `> 'runbot' để chạy bot`,
        command: () => `lệnh`,
        /**
         * @param {String} name Command name
         */
        command_err: (name) => `[Lệnh | Lỗi] Không tìm thấy lệnh '${name}'`,
        // Instal
        first_time_msg: () => `[Thông báo] Đây là lần đầu bạn dùng HighwayBot`,
        install_wait: () => `[Thông báo] Vui lòng chờ tải các gói tài nguyên...`,
        /**
         * @param {Number} progress Download progress
         * @param {String} package Package name
         */
        install_package: (progress, package) => `[Thông báo] [${progress}%] Đang tải ${package}...`,
        install_done: () => '[Thông báo] Đã tải xong các gói tài nguyên.',
        /**
         * @param {String} package Package name
         * @param {String} err Error
         */
        install_err: (package, err) => `[Thông báo] Gặp lỗi khi tải gói tài nguyên '${package}':\n${err}`,
        // Guide
        first_time_guide: () =>
            `Để có thể vận hành bot vui lòng chạy các lệnh sau:\n` +
            `> 'config create default' để tạo cài đặt default\n` +
            `> 'config edit default' để chỉnh sửa cài đặt default\n` +
            `> 'config load default' để tải cài đặt default\n` +
            `> 'config reload' để làm mới file 'path.json'\n` +
            this.cmd.commands()
    },
    index: {
        /**
         * @param {String} package Package name
         */
        miss_package: (package) => `[MC-Bot | Lỗi] Thiếu gói tài nguyên ${package}`,
        install: () => `[MC-Bot| Cài đặt] Bạn vui lòng nhập lệnh 'install' để tải toàn bộ bot`,
        /**
         * @param {String} file File name
         * @param {Boolean} config Is that a config file
         */
        miss_file: (file, config) => `[MC-Bot | Lỗi] Không thể tìm thấy file ${config == true ? 'cài đặt ' : ''}'${file}'`,
        /**
         * @param {String} version Minecraft version
         * @param {String} prefix Bot's prefix
         * @param {String} server Bot's server IP
         * @param {String} owner Bot's owner
         * @param {String} bot_name Bot's name
         * @param {String} inventory_link Inventory viewer link
         */
        launch: (version, prefix, server, owner, bot_name, inventory_link) =>
            `[HighwayBot] Đang khởi động bot...\n` +
            `             Version: ${version}\n` +
            `             Prefix: ${prefix}\n` +
            `             Server: ${server}\n` +
            `             Owner: ${owner}\n` +
            `             Bot's name: ${bot_name}\n` +
            `             Inventory: ${inventory_link}\n`,
        /**
         * @param {String} reason Reason bot disconnect
         */
        disconnect: (reason) => `[MC-Bot | Ngắt kết nối] Lý do: ${reason}`,
        spawn: () => `[MC-Bot | Đăng nhập] Bot đã vào server`,
        /**
         * @param {String} poisition Bot's poisition
         */
        poisition: (poisition) => `[MC-Bot | Vị trí] Vị trí của bot: ${poisition}`,
        /**
         * @param {String} message Message
         */
        chat: (message) => `[MC-Bot | Tin nhắn] ${message}`
    },
    Core: {
        Baritone: {
            follow: {
                cant_see: () => `Bot không tìm thấy bạn!`,
                /**
                 * @param {String} coord Coord
                 */
                follow: (coord) => `[Baritone | Đi theo] Tọa độ: ${coord}`
            },
            goto: {
                err_miss_coord: () => `[Baritone | Lỗi | Đi đến] Thiếu tọa độ`,
                err_invalid_y: () => `[Baritone | Lỗi | Giá trị] Giá trị Y không hợp lệ (0 < Y < 255)`,
                /**
                 * @param {String} coord Coord
                 */
                goto: (coord) => `[Baritone | Đi đến] Tọa độ: ${coord}`
            }
        },
        Console: {
            log: {
                /**
                 * @param {{name: String, pos: String, status: String}} info Status
                 * @param {{mine: Number, place: Number, "place-err": Number, PickaxeBroken: Array}} data Data
                 */
                log: (info, data) =>
                    `[HighwayBot] Thông tin\n` +
                    `> Tên khối: ${info.name}\n` +
                    `> Vị trí: ${info.pos}\n` +
                    `> Tình trạng: ${info.status}\n` +
                    `[HighwayBot] Tiến độ\n` +
                    `> Tổng số khối đã đập: ${data.mine}\n` +
                    `> Tổng số khối đã đặt: ${data.place}\n` +
                    `> Tổng số lỗi: ${data["place-err"]}\n` +
                    `[HighwayBot] Tình trạng cúp\n` +
                    `> Độ bền đã dùng: ${data.Pickaxe1.durability}\n` +
                    `> Tổng số cúp đã hư: ${(data["PickaxeBroken"]).length}`
            }
        },
        HighwayTunnel: {
            inventory: {
                item_saver: {
                    think: () => `Hmmm...Tôi không có cây cúp nào cả.`
                }
            },
            highwaybuildtool: {
                start: () => `[Highway] Bắt đầu quá trình đào`
            }
        }
    },
    commands: {
        baritone: {
            /**
             * @param {String} commands Commands
             */
            no_command: (commands) => `[Baritone] Toàn bộ lệnh: ${commands}`,
            /**
             * @param {String} command Command
             */
            command_invalid: (command) => `[Baritone | Lỗi] Không tìm thấy lệnh ${command}`,
            /**
             * @param {String} error Error
             */
            command_err: (error) => `[Baritone | Lỗi] ${error}`
        },
        help: {
            help: () => `Nếu bạn cần giúp đỡ, vui lòng vào cli và dùng lệnh 'help' hoặc truy cập 'https://highwaybot.tk/category/command'`
        },
        infoserver: {
            /**
             * @param {String} ip Server's IP
             * @param {Number} tps TPS
             * @param {Number} players Players
             */
            info: (ip, tps, players) => `[${ip}] TPS: ${tps} | Tổng số người chơi: ${players}`
        },
        mine: {
            stop: () => `[Highway] Đã dừng việc đào`
        },
    },
    cli: {
        no_install: () => `[X] Bạn chưa tải toàn bộ HighwayBot`,
        dev_description: () => `[❕] Chỉ dành cho nhà phát triển thử nhiệm tính năng mới`,
        changelog: {
            description: () => `Các cập nhật mới cảu bot`,
            not_install: () => this.cli.no_install(),
            /**
             * @param {String} log Commit logs
             */
            changelog: (log) => `Cập nhật từ commit mới nhất:\n${log}\nNhấn ENTER để tiếp tục...`
        },
        clear: {
            description: () => `Xóa toàn bộ console`,
            clear: () => `[✔] Đã xóa toàn bộ console`
        },
        config: {
            not_install: () => this.cli.no_install(),
            miss_key: () =>
                `[Cài đặt] Cách dùng: config <tên cài đặt> <key>\n` +
                `Các 'key' hiện có\n` +
                `>  clone: Tạo bản sao của 1 cài đặt\n` +
                `>  create: Tạo cài đặt mới\n` +
                `>  delete: Xóa 1 cài đặt\n` +
                `>  edit: Chỉnh sửa cài đặt\n` +
                `>  list: Liệt kê toàn bộ cài đặt\n` +
                `>  load: Sử dụng cài đặt\n` +
                `>  reload: làm mới toàn bộ cài đặt\n` +
                `>  renane: Đổi tên cài đặt\n` +
                `>  show: Hiện 1 cài đặt`,
            /**
             * @param {String} key Key
             */
            key_not_found: (key) => `[Cài đặt | Lỗi] Không tìm thấy key '${key}'`,
            /**
             * @param {String} err Error
             */
            error: (err) => `[Cài đặt | Lỗi] ${err}`
        },
        clear: {
            description: () => this.cli.dev_description()
        },
        exit: {
            description: () => `Tắt bot`,
            exit: () => `[HighwayBot] Đã tắt`
        },
        help: {
            description: () => `Hiện toàn bộ hoặc thông tin của 1 lệnh`,
            no_description: () => `Không có mô tả`,
            no_aliases: () => `Không có tên khác`,
            /**
             * @param {String} command
             */
            command_not_found: (command) => `[Hỗ trợ | Lỗi] Không tìm thấy lệnh ${command}`,
            /**
             * @param {String} name 
             * @param {String} description 
             * @param {String} aliases 
             */
            one_command: (name, description, aliases) =>
                `Hỗ trợ của HighwayBot\n` +
                ` |  Thông tin về lệnh\n` +
                ` |  | Tên: ${name}\n` +
                ` |  | Mô tả: ${description}\n` +
                ` |  | Tên khác: ${aliases}`,
            /**
             * @param {Array} commands
             */
            all_commands: (commands) =>
                `Hỗ trợ của HighwayBot\n` +
                ` |  Danh sách toàn bộ lệnh\n` +
                commands.map(cmd => ` |  | ${cmd.name} - ${cmd.description ? cmd.description : this.cli.help.no_description()}`) +
                ` | Các kênh truyền thông và hỗ trợ\n` +
                ` |  | Discord: https://discord.gg/YSZPRkKNzh\n` +
                ` |  | Github: https://github.com/HackerShader/HighwayBot`,
        },
        info: {
            description: () => `Thông tin về HighwayBot`,
            not_install: () => this.cli.no_install(),
            info: () =>
                `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ | HighwayBot v${info.version}\n` +
                `@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@ | Build: ${info.build}\n` +
                `@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@ | Chủ sở hữu: ${info.author}\n` +
                `@@@@@@@@@@@@@@  &@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&  @@@@@@@@@@@@@@ | Cài đặt vào lúc: ${__dirname}\n` +
                `@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@ | Giấy phép: ${info.license}\n` +
                `@@@@@@@@&  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  %@@@@@@@@ | File gốc: ${info.main}\n` +
                `@@@@@@@  @@@@@@@@@@@@@@@@@     **@@@@@@@@@@@*@@@@@@@@@@@@@@@@@  @@@@@@@ | \n` +
                `@@@@@  @@@@@@@@@@@@@@@@@@                       @@@@@@@@@@@@@@@@  @@@@@ | \n` +
                `@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@@  @@@@ | \n` +
                `@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@           &@@@@@@@@@@@@@@@  @@@ | \n` +
                `@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @        @@@@@@@@@@@@@@  @@ | \n` +
                `@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#     @@@@@@@      @@@@@@@@@@@@@  @ | \n` +
                `@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@*    @@@@@@@@@@@  @ | \n` +
                `@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*     @@@@@@@@@@@@@@@@   @@@@@@@@@@@ @ | \n` +
                `@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@ @ | \n` +
                `@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @ | \n` +
                `@  @@@@@@@@@@@@@@@@@@@@@@@@@@     #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @ | \n` +
                `@  @@@@@@@@@@@@@@@@@@@@@@@@#     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @ | \n` +
                `@@  @@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@ | \n` +
                `@@@  @@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@ | \n` +
                `@@@@  @@@@@@@@@@@@@@@@@     /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@ | \n` +
                `@@@@@  @@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@ | \n` +
                `@@@@@@@  @@@@@@@@@@@&    .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@ | \n` +
                `@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@ | \n` +
                `@@@@@@@@@@@  ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,  @@@@@@@@@@@ | \n` +
                `@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@ | \n` +
                `@@@@@@@@@@@@@@@@@,   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@ | \n` +
                `@@@@@@@@@@@@@@@@@@@@@@      /@@@@@@@@@@@@@/      @@@@@@@@@@@@@@@@@@@@@@ | `
        },
        install: {
            description: () => `Khởi động quá trình tải toàn bộ bot`
        },
        language: {
            description: () => `Chỉnh sửa ngôn ngữ mặc định`,
            /**
             * @param {String} language Language
             */
            default: (language) => `[Ngôn ngữ] Ngôn ngữ đang sử dụng: ${language}`,
            how_to_use: () =>
                `Nếu bạn muốn chỉnh ngôn ngữ mặc định, nhập: 'language <viết tắt của ngôn ngữ của bạn>'\n` +
                `Ví dụ:\n` +
                `'language en' cho tiếng Anh\n` +
                `'language vi' cho tiếng Việt\n` +
                `'language ja' cho tiếng Nhật\n` +
                `'language zh' cho tiếng Trung\n` +
                `'language ko' cho tiếng Hàn\n` +
                `'language fr' cho tiếng Pháp\n` +
                `Xem thêm tại: 'https://www.loc.gov/standards/iso639-2/php/code_list.php'`,
            invalid: () => `[Ngôn ngữ] Tên viết tắt không hợp lệ (chỉ gồm 2 chữ cái như: vi, en, ...)`,
            /**
             * @param {String} language Language
             */
            change: (language) => `[Ngôn ngữ] Đã chỉnh thành: ${language}`
        },
        reload: {
            description: () => this.cli.dev_description(),
            /**
             * @param {String} file File name
             */
            reloading: (file) => `Đang tải ${file}`,
            /**
             * @param {String} file File name
             */
            reloaded: (file) => `Đã tải xong ${file}`,
            done: () => `[Làm mới] Xong`
        },
        runbot: {
            description: () => `Chạy bot`,
            not_install: () => this.cli.no_install
        },
        update: {
            description: () => `[❕] Chỉ dành cho lập trình viên | Cập nhật bot`
        },
        config: {
            /**
             * @param {String} vi_command
             * @param {String} en_command
             * @param {String} usage
             */
            no_key_or_config: (vi_command, en_command, usage) =>
                `[Cài đặt | ${vi_command[0].toUpperCase()}${vi_command.slice(1).toLowerCase()}] Cách dùng: 'config ${en_command.toLowerCase()} <tên cài đặt> ${!usage || usage.trim() == '' ? '' : `${usage}`}'`,
            /**
             * @param {String} vi_command
             * @param {String} config
             */
            not_exist: (vi_command, en_command, config) =>
                `[Cài đặt | ${vi_command[0].toUpperCase()}${vi_command.slice(1).toLowerCase()} | Lỗi] Cài đặt '${config.toLowerCase()}' không tồn tại`,
            clone: {
                no_key_or_config: () => this.cli.config.no_key_or_config('sao chép', 'clone', '<tên bản sao>'),
                /**
                 * @param {String} config Config name
                 */
                not_exist: (config) => this.cli.config.not_exist('sao chép', config),
                /**
                 * @param {String} config Config name
                 */
                already_exist: (config) => `[Cài đặt | Sao chép | Lỗi] Cài đặt '${config}' đã tồn tại`,
                /**
                 * @param {String} base Base config
                 * @param {String} clone Clone config
                 */
                done: (base, clone) => `[Cài đặt | Sao chép | Hoàn thành] Đã tạo bản sao '${clone}' từ '${base}'`
            },
            create: {
                no_key_or_config: () => this.cli.config.no_key_or_config('tạo', 'create', ''),
                /**
                 * @param {String} config Config name
                 */
                not_exist: (config) => this.cli.config.not_exist('tạo', config),
                /**
                 * @param {String} config Config name
                 */
                done: (config) =>
                    `[Cài đặt | Tạo | Hoàn thành] Đã tạo cài đặt rỗng '${config}'\n` +
                    `[Cài đặt | Đề nghị] Bạn có thể dùng lệnh 'config edit ${config}' để chỉnh sửa`
            },
            delete: {
                no_key_or_config: () => this.cli.config.no_key_or_config('xóa', 'delete', ''),
                /**
                 * @param {String} config Config name
                 */
                not_exist: (config) => this.cli.config.not_exist('xóa', config),
                /**
                * @param {String} config Config name
                */
                done: (config) => `[Cài đặt | Xóa | Hoàn thành] Đã xóa cài đặt '${config}'`
            },
            edit: {
                no_key_or_config: () =>
                    `${this.cli.config.no_key_or_config('chỉnh sửa', 'edit', '<key_1>:<giá_trị_1> <key_2>:<giá_trị_2> ...')}`,
                /**
                 * @param {String} config Config name
                 */
                not_exist: (config) => this.cli.config.not_exist('chỉnh sửa', config),
                /**
                 * @param {String} config Config name
                 */
                show_key_and_value: (config) => `[Cài đặt | Đề nghị] Bạn có thể dùng 'config show ${config}' để biết các key và giá trị`,
                /**
                 * @param {String} key Key
                 */
                invalid_key: (key) => `[Cài đặt | Chỉnh sửa | Lỗi] Key '${key}' không tồn tại`,
                /**
                 * @param {String} key Key
                 */
                invalid_number: (key) => `[Cài đặt | Chỉnh sửa | Lỗi] Key '${key}' phải là một con số`,
                /**
                 * @param {String} version Minecraft version
                 */
                invalid_version: (version) => `[Cài đặt | Chỉnh sửa | Lỗi] Phiên bản '${version}' không hợp lệ (chỉ hỗ trợ từ 1.8 đến 1.18)`,
                /**
                 * @param {String} config Config name 
                 */
                done: (config) => `[Cài đặt | Chỉnh sửa | Hoàn thành] Đã chỉnh sửa cài đặt '${config}'`,
                /**
                 * @param {String[]} array Array of string
                 */
                edited: (array) =>
                    `Những thứ đã chỉnh sửa:\n` +
                    `>  ${array.join('\n>  ')}`
            },
            list: {
                /**
                 * @param {String[]} array Array of config
                 * @param {Stirng} current Current config
                 */
                list: (array, current) =>
                    `[Config | Thống kê] Danh sách các cài đặt:\n` +
                    `>  ${array.map(name => {
                        let n = name.replace('.json', '');
                        if (n + '.json' == current) n += ' (đang dùng)';
                        return n;
                    }).join('\n>  ')}`
            },
            load: {
                no_key_or_config: () => this.cli.config.no_key_or_config('dùng', 'load', ''),
                /**
                 * @param {String} config Config name
                 */
                not_exist: (config) => this.cli.config.not_exist('dùng', config),
                /**
                 * @param {String} config Config name
                 */
                done: (config) =>
                    `[Cài đặt | Dùng | Hoàn thành] Đã dùng cài đặt '${config}'\n` +
                    `[Cài đặt | Đề nghị] Bạn có thể dùng 'config reload' để làm mới cài đặt`
            },
            reload: {
                done: () => `[Cài đặt | Làm mới] Đã làm mới toàn bộ cài đặt`,
                /**
                 * @param {String} config Config name
                 */
                not_exist: (config) => `[Cài đặt | Làm mới | Lỗi] Cài đặt ${config} không còn tồn tại`,
                /**
                 * @param {String} config Config name
                 */
                change: (config) => `[Cài đặt | Làm mới] Đã chuyển cài đặt thành '${config}'`
            },
            rename: {
                no_key_or_config: () => this.cli.config.no_key_or_config('đổi tên', 'rename', '<tên mới>'),
                /**
                 * @param {String} config Config name
                 */
                not_exist: (config) => this.cli.config.not_exist('đổi tên', config),
                /**
                 * @param {String} config Config name
                 */
                already_exist: (config) => `[Cài đặt | Đổi tên | Lỗi] Cài đặt '${config}' đã tồn tại`,
                /**
                 * @param {String} old_config Old config name
                 * @param {String} new_config New config name
                 */
                done: (old_config, new_config) =>
                    `[Cài đặt | Đổi tên | Hoàn thành] Đã đổi tên '${old_config}' thành '${new_config}'`
            },
            show: {
                no_key_or_config: () => this.cli.config.no_key_or_config('thống kê', 'show', ''),
                /**
                 * @param {String} config Config name
                 */
                not_exist: (config) => this.cli.config.not_exist('thống kê', config),
                key: () => `Key`,
                value: () => `Giá trị`,
            }
        },
        installer: {
            download: {
                get_information: () => `[Thông báo] Đang lấy thông tin từ API của Github...`,
                downloading: () => `[Thông báo] Đang tải File từ Github...`,
                done: () => `[Thông báo] Đã tải xong.`
            },
            install: {
                install_package: () => `[Thông báo] Đang tải các gói tài nguyên...`,
                install_done: () =>
                    `[Thông báo] Đã tải xong các gói tài nguyên\n` +
                    `[Thông báo] Đã tải toàn bộ HoghwayBot`,
                relaunch: () => `[Thông báo] Vui lòng khởi động lại HighwayBot [node cmd | ./start.bat]`
            }
        },
        prepair: {
            choices: () =>
                `----- Chào mừng bạn đã đến bộ cài đặt của HighwayBot ----\n` +
                `Bộ cài đặt này sẽ giúp bạn tải toàn bộ HighwayBot\n` +
                `Chúng tôi cần một số thông tin trước khi cài đặt\n` +
                `\n` +
                `Dự án HighwayBot vẫn đang trong quá trình phát triển.\n` +
                `Ở đây sẽ có 2 lựa chọn cho bạn khi tải HighwayBot\n` +
                `\n`,
            choice_1: () =>
                `1. Tải từ trực tiếp từ Github của HighwayBot ([❕] Chỉ dành cho các nhà phát triển) (Yêu cầu 'git')`,
            choice_2: () =>
                `2. Tải từ trang cập nhật các phiên bản mới (Khuyến nghị cho các người dùng phổ thông)`,
            choice_3: () =>
                `3. Thoát bộ cài đặt HighwayBot`,
            method_1: {
                notification: () =>
                    `Bạn đã chọn cách 1 (tải từ Github)\n` +
                    `Vui lòng chờ trong lúc HoghwayBot đang tải xuống...`,
                cloning: () =>
                    `[Thông báo] Đang tải...`,
                done: () =>
                    `[Thông báo] Đã tải xong.`,
                relaunch: () => `[Thông báo] Vui lòng khởi động lại HighwayBot [node cmd | ./start.bat]`
            },
            method_2: {
                notification: () => `Bạn đã chọn cách 2 (tải từ trang cập nhật)`,
                confirm: () =>
                    `Bộ cài đặt này được tạo ra bởi đội lập trình của HighwayBot.\n` +
                    `Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào do trình cài đặt này gây ra trong bản thử nghiệm\n` +
                    `Bạn có chắc chắn tiếp tục? (Y / N)`,
                deny: () =>
                    `[X] Đã dừng việc tải\n` +
                    `Lý do: Bạn không đồng ý với các điều khoản`,
                acccept: () =>
                    `Cảm ơn bạn đã hợp tác\n` +
                    `Đã khởi động quá trình tải xuống...`,
            }
        },
        unzip: {
            unzipping: () => `[Thông báo] Đang giải nén các File...`,
            unzip_done: () => `[Thông báo] Đã giải nén các File`,
        }
    }
}