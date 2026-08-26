const I18N = {
  vi: {
    "meta.title": "Fortress - Võ Phú Vinh | Security Researcher",
    "meta.desc": "Võ Phú Vinh (Fortress) - sinh viên An toàn thông tin HCMUTE, security researcher với nhiều CVE được ghi nhận.",

    "nav.home": "Trang chủ",
    "nav.writeup": "Writeup",
    "nav.journey": "Hành trình",
    "nav.contact": "Liên hệ",

    "hero.desc": "Sinh viên ngành <strong>An toàn thông tin</strong> tại HCMUTE. Mình tìm và báo cáo có trách nhiệm các lỗ hổng trong dự án mã nguồn mở - đến nay đã có <strong>nhiều CVE được ghi nhận</strong>.",
    "hero.btn1": "Xem bản tin CVE",
    "hero.btn2": "Liên hệ",

    "about.h2": "Về <span class=\"grad-text\">tôi</span>",
    "about.sub": "Một chút về người đứng sau những báo cáo lỗ hổng.",
    "about.p1": "Mình là <strong>Võ Phú Vinh</strong> <strong>(Fortress)</strong>. Hiện là sinh viên chuyên ngành <strong>An toàn thông tin</strong> tại <strong>Trường Đại học Công nghệ Kỹ thuật TP.HCM</strong> (tên cũ: Trường Đại học Sư phạm Kỹ thuật TP.HCM).",
    "about.p2": "Hướng đi hiện tại mình đang theo đuổi là đọc source code của các dự án mã nguồn mở để tìm lỗ hổng, rồi <strong>báo cáo có trách nhiệm</strong> cho maintainer trước khi công bố.",
    "fact1.k": "Học vấn",
    "fact1.v": "Sinh viên năm 2 - An toàn thông tin, HCMUTE",
    "fact4.k": "Điểm trung bình",
    "fact4.v": "GPA 3.07 / 4.0",
    "fact2.k": "Hướng nghiên cứu",
    "fact2.v": "Vulnerability research &amp; responsible disclosure",
    "fact3.k": "Email",
    "stat0": "Finding được ghi nhận",
    "stat1": "CVE được ghi nhận",
    "stat2": "Dự án mã nguồn mở",
    "stat3": "Lớp CWE khác nhau",
    "stat4": "Bug bounty được thưởng",

    "home.h2": "Bản tin <span class=\"grad-text\">lỗ hổng</span>",
    "home.sub": "Toàn bộ finding mình đã báo cáo - CVE, advisory được publish nhưng không xin CVE, và bug bounty được ghi nhận. Mới nhất xếp trước, mỗi card gồm tóm tắt kỹ thuật, ảnh hưởng và đoạn code gốc gây ra lỗ hổng.",
    "filter.aria": "Lọc theo loại finding",
    "filter.all": "Tất cả",
    "filter.cve": "CVE",
    "filter.advisory": "Advisory (không CVE)",
    "filter.bounty": "Bug bounty",
    "kind.advisory": "Advisory · không CVE",
    "status.state": "Trạng thái",
    "status.updated": "Cập nhật gần đây",
    "feed.all": "Xem tất cả writeup →",
    "link.more": "Xem chi tiết →",
    "link.back": "← Quay lại danh sách writeup",
    "detail.arch": "Cơ chế dự án",
    "detail.map": "Vị trí chính xác trong code",
    "ar1.cap": "Bình thường tool đọc <code>package.json</code>, gọi npm bằng một tiến trình con để lấy cây phụ thuộc rồi xuất SBOM. Toàn bộ lỗ hổng nằm gọn ở đúng bước sinh tiến trình con đó.",
    "ar2.cap": "Trên Windows, npm được phân giải thành <code>npm.cmd</code> - một batch file - nên tool buộc phải đi qua <code>cmd.exe</code>. Đây là đường đi mặc định của người dùng Windows, không phải trường hợp hiếm.",
    "ar3.cap": "Nextcloud bắn sự kiện file qua webhook để MCP server cập nhật vector index trong Qdrant, phục vụ semantic search cho LLM client. Endpoint webhook là cửa duy nhất - và cửa đó không khoá.",
    "ar4.cap": "MCP server đứng giữa client và NetBox, và chính nó giữ token NetBox. Vì vậy chạm được tới port 8000 đồng nghĩa với mượn được quyền của token đó, không cần credential nào của riêng mình.",
    "ar5.cap": "Client gọi tool <code>prepare_ios_simulator</code>, server dịch tham số thành lệnh <code>xcrun simctl</code> chạy trên máy host. Điểm đáng chú ý: tham số của tool do mô hình sinh ra chứ không do người gõ.",
    "ar6.cap": "pbf nhận schema rồi tự sinh mã reader/writer bằng <code>new Function()</code>. Đây là một code generator thật sự, nên mọi giá trị trong schema đều là mã nguồn tiềm năng chứ không chỉ là dữ liệu.",
    "cm1.cap": "Thu hẹp dần: repo → <code>src/npmRunner.ts</code> → nhánh executor khi <code>npm_execpath</code> rỗng → đúng một dòng gọi <code>execSync</code>. Dòng xanh là bản vá 5.0.0 thay thế nó.",
    "cm2.cap": "Vẫn file đó, nhưng lần này là nhánh chỉ chạy trên Windows: Node bọc nháy tham số rồi giao cho <code>cmd.exe</code> diễn giải lại. Dòng xanh là cách 6.0.0 bỏ hẳn shell khỏi luồng.",
    "cm3.cap": "Dòng nét đứt là hàng rào lẽ ra phải có: chặn request khi secret rỗng. Vì nó không tồn tại, nhánh <code>else</code> chỉ ghi log rồi cho request đi tiếp.",
    "cm4.cap": "Không có dòng nào gán <code>mcp.auth</code>, nên FastMCP không gắn middleware xác thực - stack chỉ còn CORS, và <code>mcp.run()</code> mở cổng cho tất cả.",
    "cm5.cap": "Hai trong bốn call site nội suy <code>udid</code> thẳng vào chuỗi lệnh; dòng nét đứt là bước kiểm định dạng UDID mà mãi tới bản vá 1.86.5 mới có.",
    "cm6.cap": "Vòng lặp kiểm định danh nằm ngay cạnh dòng nội suy tag - thiếu đúng một lời gọi <code>validateTag()</code>, và đó chính là thứ 5.1.2 bổ sung.",
    "detail.diagram": "Đường đi của lỗ hổng",
    "stats.h": "Thống kê finding",
    "stats.sub": "Điểm CVSS của từng finding, đọc thẳng từ danh sách bên dưới - bấm một hàng để mở writeup.",
    "stats.scale": "thang CVSS 0 → 10",
    "dg1.cap": "<b>Hai nhánh, một lối thoát.</b> Khi <code>npm_execpath</code> có giá trị, tool gọi <code>execFileSync</code> và tham số đi qua dạng mảng - shell không tham gia. Chỉ khi biến này rỗng, nhánh fallback mới nối tất cả thành một chuỗi rồi giao cho shell, và mọi metacharacter trong <code>--workspace</code> được diễn giải như lệnh.",
    "dg2.cap": "<b>Một chuỗi, hai bộ luật.</b> Node ghép mảng tham số theo quy ước <code>CommandLineToArgvW</code> rồi tin rằng dấu nháy đã bọc kín giá trị. <code>cmd.exe</code> lại xử lý <code>&amp; | &gt; ^</code> trước cả dấu nháy và không hiểu <code>\\\"</code> - nên đúng dòng lệnh đó bị tách thành hai lệnh.",
    "dg3.cap": "<b>Hai khiếm khuyết chồng lên nhau.</b> Cổng kiểm tra chữ ký nằm trong <code>if secret:</code> nên ở cấu hình mặc định nó không chạy - request đi tiếp sau đúng một dòng warning. Ngay sau đó, danh tính người dùng lại đọc từ chính body của request, nên attacker tự chọn được mình là ai.",
    "dg4.cap": "<b>Viên gạch không bao giờ được đặt.</b> Stack middleware chỉ có CORS; FastMCP chỉ gắn lớp xác thực khi <code>mcp.auth</code> có giá trị, mà giá trị đó không bao giờ được set. Ai chạm tới port đều mở được session hợp lệ và gọi cả bốn tool.",
    "dg5.cap": "<b>Dấu nháy nằm trong tay attacker.</b> <code>udid</code> được nội suy vào giữa hai dấu nháy kép, nên chỉ cần đóng nháy sớm là phần phía sau trở thành lệnh riêng; đoạn <code>echo \"x</code> ở cuối mở lại nháy để câu lệnh không văng lỗi cú pháp.",
    "dg6.cap": "<b>Hàng rào dựng sẵn, nhưng thiếu một cọc.</b> Mọi định danh lấy từ schema đều đi qua <code>validateIdentifier()</code> trước khi được nội suy vào mã sinh ra - riêng <code>field.tag</code> thì không, dù nó nằm trong chính chuỗi mã đó.",
    "detail.code": "Đoạn code gây ra lỗ hổng",
    "detail.process": "Quá trình phát hiện",
    "c5.teaser": "Thư viện protobuf của Mapbox dựng mã bằng <code>new Function()</code>; mọi định danh trong schema đều được kiểm, riêng <code>field.tag</code> thì không - đủ để mang JavaScript tùy ý vào reader và writer.",
    "c4.teaser": "Bản vá cho CVE-2026-55849 chặn được shell trên Linux nhưng để lại một nhánh <code>cmd.exe /c</code> chỉ có trên Windows - lệnh vẫn chèn được qua <code>--workspace</code>.",
    "c1.teaser": "Chèn lệnh hệ điều hành qua option <code>--workspace</code> của một tool sinh SBOM chạy tự động trong pipeline CI/CD.",
    "c2.teaser": "Webhook endpoint không xác thực theo mặc định, cộng thêm uid lấy thẳng từ payload - đủ để xoá sạch vector index của mọi user.",
    "c3.teaser": "Endpoint MCP mở toang khi chạy <code>TRANSPORT=http</code>, đọc được toàn bộ dữ liệu hạ tầng NetBox mà không cần credential.",
    "label.summary": "Tóm tắt",
    "label.impact": "Ảnh hưởng",

    "c5.summary": "<code>compile.js</code> của pbf dựng mã JavaScript dưới dạng chuỗi rồi chạy nó qua <code>new Function()</code>. Mọi định danh lấy từ schema - tên message, tên field, tên oneof, tên enum value - đều đi qua <code>validateIdentifier()</code> trước, riêng <code>field.tag</code> thì không. Giá trị tag được chèn thẳng vào mã sinh ra mà không qua bất kỳ bước kiểm nào, nên một schema có <code>field.tag</code> là chuỗi có thể mang JavaScript tùy ý vào cả reader lẫn writer được biên dịch.",
    "c5.impact": "Bất kỳ ứng dụng nào gọi <code>compile()</code> / <code>compileRaw()</code> trên một schema protobuf đến từ nguồn do người dùng kiểm soát - ví dụ schema descriptor nhận qua JSON hoặc qua API - sẽ thực thi JavaScript của attacker ngay trong tiến trình của mình. Attacker chỉ cần gửi một schema trong đó tag của một field là chuỗi được dựng sẵn; ngay khi nạn nhân compile schema đó, code chạy với đúng quyền của tiến trình nạn nhân, mà message vẫn decode ra giá trị bình thường nên injection không lộ ra ở output. Phạm vi: luồng <code>.proto</code> được tài liệu hóa (<code>schema.parse</code>) không bị ảnh hưởng vì tag luôn được ép qua <code>Number()</code> - vector nằm ở API nhận schema dạng object.",
    "c5.path1": "compile.js - v5.1.1 trở về trước",
    "c5.note1": "<b>Vấn đề:</b> <span>Toàn bộ chuỗi trên cuối cùng được đưa vào <code>new Function()</code>. Tag về mặt khái niệm là số nguyên, nhưng schema chỉ là một object JavaScript thuần - không có gì bắt <code>tag</code> phải là number, nên nó trở thành một lối vào không ai canh.</span>",
    "c5.note2": "<b>Cách sửa:</b> <span>Bản vá thêm <code>validateTag()</code> vào đúng vòng lặp đã có sẵn <code>validateIdentifier()</code>: tag phải là số nguyên trong khoảng <code>[1, 2^29 - 1]</code>, chuỗi số vẫn được chấp nhận để không phá luồng <code>.proto</code>, còn lại thì throw.</span>",
    "c5.ver1": "Bị ảnh hưởng: ≤ 5.1.1 (kiểm chứng trên 5.1.0)",
    "c5.ver2": "Đã sửa: 5.1.2",
    "c5.ver3": "Không bị ảnh hưởng: luồng .proto qua schema.parse",
    "c6.teaser": "Tham số <code>udid</code> đi thẳng vào chuỗi lệnh shell của tool <code>prepare_ios_simulator</code> - mọi MCP client kết nối tới đều chạy được lệnh tùy ý trên máy host.",
    "c6.summary": "Tool <code>prepare_ios_simulator</code> nhận tham số <code>udid</code> từ MCP client rồi nội suy thẳng vào chuỗi lệnh shell qua <code>execAsync</code>, ở bốn call site khác nhau. Lớp bảo vệ duy nhất là cặp dấu nháy kép bao quanh giá trị - nhưng nháy kép nằm ngay trong chuỗi do attacker kiểm soát, nên chỉ cần đóng nháy sớm là thoát được ra ngoài câu lệnh dự kiến.",
    "c6.impact": "Bất kỳ MCP client nào kết nối tới server đều thực thi được lệnh hệ điều hành tùy ý trên máy host, với quyền của tiến trình MCP server - đọc toàn bộ filesystem, lấy credential, và từ đó mở rộng sang các hệ thống khác. Đáng lo hơn ở bối cảnh MCP, vì tham số của tool call thường do một mô hình sinh ra: nội dung không đáng tin có thể đi thẳng vào <code>udid</code> mà không qua mắt người dùng.",
    "c6.nocve": "<b>Vì sao không có CVE:</b> <span>Advisory đã publish công khai trên repo appium/appium-mcp và ghi nhận mình là người báo cáo, nhưng không có CVE ID nào được cấp. Quyền request CVE thuộc về phía maintainer, và họ đã không request - mình có mong muốn được cấp CVE và đã nói rõ điều đó với họ, nhưng tới giờ vẫn chưa biết lý do. Hệ quả là finding này không nằm trong GitHub Global Advisory Database và không hiện khi chạy <code>npm audit</code>. Mình vẫn liệt kê ở đây, gắn nhãn đúng bản chất: một finding được publish và được ghi nhận, không phải một CVE.</span>",
    "c6.path1": "src/tools/ios/prepare-ios-simulator.ts - trước v1.86.5",
    "c6.note1": "<b>Vấn đề:</b> <span><code>execAsync</code> là <code>exec()</code> của Node - luôn đi qua shell. Giá trị <code>udid</code> đến thẳng từ tham số của tool call, không hề được kiểm định dạng, trong khi một UDID hợp lệ chỉ gồm hex và dấu gạch ngang.</span>",
    "c6.note2": "<b>Vì sao nháy kép không cứu được:</b> <span>Dấu nháy do template literal thêm vào bị chính payload đóng lại sớm. Phần <code>echo \"x</code> ở cuối chỉ để mở lại nháy cho vế sau, giúp câu lệnh vẫn hợp lệ và không văng lỗi cú pháp - lệnh chèn vào chạy trọn vẹn.</span>",
    "c6.ver1": "Bị ảnh hưởng: ≥ 1.49.0, ≤ 1.86.4",
    "c6.ver2": "Đã sửa: 1.86.5",
    "c5.vector": "<b>CVSS 3.1</b>&nbsp; AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "badge.rewarded": "Đã được thưởng $1,000",

    "c4.summary": "Bản vá v5.0.0 của CVE-2026-55849 thay <code>execSync</code> bằng <code>execFileSync</code>, nhưng đồng thời thêm một nhánh riêng cho Windows. Khi npm được phân giải thành một batch file (<code>npm.cmd</code>), tool chạy <code>execFileSync('cmd.exe', ['/c', execPath, ...args])</code>. Node escape tham số theo quy ước <code>CommandLineToArgvW</code>, nhưng <code>cmd.exe</code> lại parse dòng lệnh bằng bộ luật riêng: nó xử lý các metacharacter <code>&amp;</code>, <code>|</code>, <code>&gt;</code>, <code>^</code> trước và không hiểu escape kiểu <code>&#92;&quot;</code>. Vì vậy giá trị <code>--workspace</code> do người dùng cung cấp vẫn thoát ra được khỏi câu lệnh dự kiến - lần này chỉ trên Windows.",
    "c4.impact": "Thực thi lệnh tùy ý với quyền của user đang chạy CLI trên máy Windows - rút dữ liệu, sửa hoặc xóa file, và tùy cách triển khai có thể dẫn tới leo thang đặc quyền. Vì đây vẫn là tool sinh SBOM chạy tự động trong pipeline, các Windows CI runner là mục tiêu trực tiếp. Đáng chú ý: đây là bản vá của một CVE trước đó, nên những ai đã nâng cấp lên 5.0.0 để tránh CVE-2026-55849 vẫn còn nằm trong vùng ảnh hưởng.",
    "c4.path1": "src/npmRunner.ts - v5.0.0",
    "c4.note1": "<b>Vấn đề:</b> <span><code>execFileSync</code> không đi qua shell của Node - nhưng ở đây chính <code>cmd.exe</code> mới là shell. Toàn bộ <code>args</code> được ghép lại thành một command line rồi giao cho <code>cmd.exe /c</code> diễn giải lại theo luật của nó.</span>",
    "c4.note2": "<b>Cách sửa:</b> <span>v6.0.0 bỏ hẳn nhánh <code>cmd.exe</code>. Chỉ chấp nhận đường dẫn tới npm CLI dạng <code>.js</code>, còn lại thì throw, và luôn gọi qua <code>node -- npm-cli.js</code> với <code>shell: false</code>. Không còn shell nào trong luồng thì không còn metacharacter nào để diễn giải.</span>",
    "c4.ver1": "Bị ảnh hưởng: 5.0.0 (chỉ trên Windows)",
    "c4.ver2": "Đã sửa: 6.0.0",
    "c4.ver3": "Tạm thời: trỏ npm_execpath tới npm-cli.js",

    "c1.summary": "Chèn lệnh hệ điều hành qua option <code>--workspace &lt;value&gt;</code>. Khi biến môi trường <code>npm_execpath</code> được set, tool gọi thẳng npm executable nên an toàn. Nhưng nếu <code>npm_execpath</code> rỗng hoặc không set, tool rơi vào nhánh fallback: spawn một subshell và nối thẳng chuỗi <code>'npm ' + args.join(' ')</code> mà không escape. Các ký tự đặc biệt của shell như <code>;</code>, <code>&amp;&amp;</code>, <code>|</code> được shell diễn giải, cho phép thoát khỏi câu lệnh dự kiến.",
    "c1.impact": "Thực thi lệnh tùy ý với quyền của user đang chạy CLI - rút dữ liệu, sửa hoặc xóa file, và tùy cách triển khai có thể dẫn tới leo thang đặc quyền. Đặc biệt đáng lo trong môi trường CI/CD, vì đây là tool sinh SBOM thường chạy tự động trong pipeline.",
    "c1.path1": "src/npmRunner.ts - trước v5.0.0",
    "c1.note1": "<b>Vấn đề:</b> <span><code>args</code> chứa giá trị <code>--workspace</code> do người dùng cung cấp, nhưng lại được nối thành chuỗi rồi đưa qua shell. Giả định “ta kiểm soát hoàn toàn args” trong comment là sai.</span>",
    "c1.note2": "<b>Cách sửa:</b> <span>Thay <code>execSync</code> (đi qua shell) bằng <code>execFileSync</code> - truyền tham số dưới dạng mảng nên shell không còn diễn giải metacharacter.</span>",
    "c1.ver1": "Bị ảnh hưởng: ≥ 2.1.0, &lt; 5.0.0",
    "c1.ver2": "Đã sửa: 5.0.0",
    "c1.ver3": "Tạm thời: set npm_execpath",

    "c2.summary": "Endpoint <code>POST /webhooks/nextcloud</code> không xác thực theo mặc định, do hai nguyên nhân chồng lên nhau. Thứ nhất, <code>webhook_secret</code> mặc định là <code>None</code> và không có startup validator nào bắt buộc nó, kể cả khi vector sync đang bật. Thứ hai, toàn bộ phần kiểm tra nằm trong nhánh <code>if secret:</code> - nên khi secret không được set, nhánh kiểm tra bị bỏ qua hoàn toàn, chỉ ghi một dòng warning rồi vẫn xử lý request bình thường.",
    "c2.impact": "Attacker không cần credential, chỉ cần tiếp cận được port 8000 là có thể xóa hoặc ép re-index vector embedding của bất kỳ user nào trong Qdrant. Kết hợp với việc <code>user_id</code> được lấy thẳng từ payload do attacker gửi, có thể giả mạo uid rồi loop qua doc ID để phá sạch semantic search index của toàn bộ user - muốn khôi phục phải re-scan lại từ đầu.",
    "c2.note1": "<b>Vấn đề:</b> <span>Không có secret thì rơi vào nhánh <code>else</code> - chỉ log cảnh báo rồi tiếp tục xử lý request. Fail-open thay vì fail-closed.</span>",
    "c2.note2": "<b>Vấn đề:</b> <span>Danh tính người dùng lấy thẳng từ body request, không đối chiếu với session hay token nào - vi phạm trust boundary, cho phép spoof uid.</span>",
    "c2.ver1": "Bị ảnh hưởng: ≤ 0.117.1",
    "c2.ver2": "Đã sửa: 0.117.2",

    "c3.summary": "Khi chạy với <code>TRANSPORT=http</code>, endpoint MCP không có bất kỳ lớp xác thực nào. Project chỉ gắn <code>CORSMiddleware</code> và không bao giờ set <code>mcp.auth</code>, trong khi FastMCP chỉ bật auth middleware nếu <code>mcp.auth</code> có giá trị. Kết quả là ai chạm được tới port đều mở được session hợp lệ và gọi được cả 4 tool NetBox. Nghiêm trọng hơn, README hướng dẫn chạy Docker với <code>HOST=0.0.0.0</code> và <code>-p 8000:8000</code> ở ba chỗ mà không hề nhắc tới xác thực.",
    "c3.impact": "Đọc được toàn bộ dữ liệu NetBox mà không cần credential - devices, IP, VLAN, rack, circuit, VM, và cả changelog có chứa username. Mất hoàn toàn tính bí mật, không ảnh hưởng tới tính toàn vẹn hay tính sẵn sàng.",
    "c3.note1": "<b>Vấn đề:</b> <span>Không có dòng nào gán <code>mcp.auth</code> trong toàn bộ codebase. <code>\"Authorization\"</code> chỉ xuất hiện trong danh sách CORS header được phép - CORS là chính sách trình duyệt, không phải xác thực.</span>",
    "c3.ver1": "Bị ảnh hưởng: ≤ 1.2.0",
    "c3.ver2": "Đã sửa: 1.2.1",

    "link.cve": "Xem bản ghi trên cve.org ↗",
    "link.ghsa": "Xem advisory GHSA ↗",
    "link.patch": "Xem bản vá (PR #149) ↗",

    "journey.h2": "Hành <span class=\"grad-text\">trình</span>",
    "journey.sub": "Các cột mốc theo thứ tự gần nhất trước, tính theo ngày advisory được công khai hoặc ngày báo cáo được ghi nhận.",
    "tlb.time": "Đã vá 09/07/2026 · Mapbox Bug Bounty · HIGH",
    "tlb.p": "<code>compile.js</code> sinh mã qua <code>new Function()</code> nhưng bỏ sót <code>field.tag</code> ở khâu kiểm định danh - một schema do attacker cung cấp chạy được JavaScript tùy ý. Mapbox vá chỉ một ngày sau khi mình báo cáo, ở phiên bản 5.1.2.",
    "tl0.time": "Công khai 07/07/2026 · CVE-2026-71538 · HIGH",
    "tla.time": "Công khai 28/06/2026 · GHSA (không CVE) · HIGH",
    "tla.p": "Tham số <code>udid</code> của tool <code>prepare_ios_simulator</code> đi thẳng vào chuỗi lệnh shell, cho phép mọi MCP client chạy lệnh tùy ý trên máy host. Đã được sửa ở phiên bản 1.86.5. Advisory được publish và ghi nhận, nhưng maintainer không request CVE nên finding này không có CVE ID.",
    "tl1.time": "Công khai 18/06/2026 · CVE-2026-57207 · MODERATE",
    "tl2.time": "Công khai 16/06/2026 · CVE-2026-55849 · HIGH",
    "tl3.time": "Công khai 14/06/2026 · CVE-2026-55640 · CRITICAL",
    "tl0.p": "Bản vá của CVE-2026-55849 để lại một nhánh <code>cmd.exe /c</code> chỉ có trên Windows - <code>--workspace</code> vẫn chèn được lệnh. Đã được sửa ở phiên bản 6.0.0.",
    "tl1.p": "Endpoint MCP không xác thực khi chạy <code>TRANSPORT=http</code>, đọc được toàn bộ dữ liệu hạ tầng NetBox mà không cần credential. Đã được sửa ở phiên bản 1.2.1.",
    "tl2.p": "Chèn lệnh qua option <code>--workspace</code> khi <code>npm_execpath</code> không được set, dẫn tới thực thi lệnh tùy ý ngay trong pipeline CI/CD sinh SBOM. Đã được sửa ở phiên bản 5.0.0.",
    "tl3.p": "Webhook endpoint không xác thực theo mặc định, cộng với uid lấy thẳng từ payload - cho phép phá sạch vector search index của mọi user. Đã được sửa ở phiên bản 0.117.2.",
    "tl4.time": "NĂM NHẤT · HCMUTE",
    "tl4.h3": "Bắt đầu nghiên cứu",
    "tl4.sub": "An toàn thông tin - HCMUTE",
    "tl4.p": "Ngay từ năm nhất, mình bắt đầu học nền tảng An toàn thông tin và tập đọc source code của các dự án mã nguồn mở để tìm lỗ hổng.",

    "contact.h2": "Cùng <span class=\"grad-text\">kết nối</span> nhé",
    "contact.p": "Nếu bạn muốn trao đổi về bảo mật, hợp tác nghiên cứu, hay đơn giản là làm quen - gửi mình một email hoặc kết nối qua các kênh bên dưới.",

    "wu.h2": "Nhật ký <span class=\"grad-text\">săn lỗ hổng</span>",
    "wu.sub": "Đằng sau mỗi CVE là một quá trình đọc code, đặt giả thuyết và kiểm chứng. Đây là cách mình đi từ dòng code đáng ngờ đến advisory được công bố.",
    "wu1.s1h": "Vì sao chọn mục tiêu này",
    "wu1.s1p": "Tool sinh SBOM là thứ chạy tự động trong pipeline CI/CD của rất nhiều dự án, thường với quyền khá rộng. Một lỗi thực thi lệnh ở đây có sức lan tỏa lớn hơn nhiều so với một ứng dụng đơn lẻ, nên mình ưu tiên đọc nhóm công cụ build-time trước.",
    "wu1.s2h": "Manh mối đầu tiên",
    "wu1.s2p": "Mình grep toàn bộ codebase tìm các hàm sinh process: <code>exec</code>, <code>execSync</code>, <code>spawn</code>. Ngay tại <code>npmRunner.ts</code> có một comment tự trấn an rằng “an toàn vì ta kiểm soát hoàn toàn args”. Comment kiểu này thường là dấu hiệu của một giả định chưa từng được kiểm chứng lại sau khi code thay đổi.",
    "wu1.s3h": "Truy ngược luồng dữ liệu",
    "wu1.s3p": "Lần ngược từ chỗ gọi <code>execSync</code> lên tới CLI, mình thấy giá trị của option <code>--workspace</code> đi thẳng vào mảng <code>args</code> mà không qua bất kỳ bước lọc nào. Giả định trong comment sụp đổ: một phần của <code>args</code> đến từ người dùng.",
    "wu1.s4h": "Điều kiện kích hoạt",
    "wu1.s4p": "Nhánh nguy hiểm chỉ chạy khi <code>npm_execpath</code> rỗng hoặc không được set - tức khi tool được gọi trực tiếp chứ không qua npm script. Đây chính là lý do lỗi sống sót lâu: ở luồng chạy phổ biến nhất, code đi vào nhánh an toàn.",
    "wu1.s5h": "Báo cáo &amp; kết quả",
    "wu1.s5p": "Mình gửi báo cáo riêng cho maintainer kèm PoC tối thiểu và đề xuất thay <code>execSync</code> bằng <code>execFileSync</code>. Bản vá ra mắt ở v5.0.0, CVE được cấp với điểm CVSS 4.0 là 8.5 (High).",
    "wu2.s1h": "Bối cảnh",
    "wu2.s1p": "MCP server là lớp phần mềm còn rất mới, mọc lên nhanh và phần lớn được viết với giả định “chỉ chạy trên máy cá nhân”. Giả định đó thường không còn đúng khi người dùng đem nó lên container và mở port ra ngoài.",
    "wu2.s2h": "Điểm bất thường",
    "wu2.s2p": "Mình rà các route nhận request từ bên ngoài và dừng lại ở webhook receiver. Toàn bộ đoạn kiểm tra chữ ký nằm gọn trong một khối <code>if secret:</code> - nghĩa là nếu secret không tồn tại, phần kiểm tra đơn giản là không chạy.",
    "wu2.s3h": "Xác nhận giá trị mặc định",
    "wu2.s3p": "Mình kiểm tra lớp settings: <code>webhook_secret</code> mặc định là <code>None</code>, và không có startup validator nào bắt buộc nó ngay cả khi tính năng vector sync đang bật. Vậy là cấu hình mặc định của dự án cũng chính là cấu hình không xác thực.",
    "wu2.s4h": "Nâng mức nghiêm trọng",
    "wu2.s4p": "Đọc tiếp phần parser, mình phát hiện <code>user_id</code> được lấy thẳng từ payload của request. Không chỉ vào được endpoint, attacker còn tự chọn được mình là ai - đủ để duyệt qua doc ID và xóa sạch vector index của mọi user.",
    "wu2.s5h": "Báo cáo &amp; kết quả",
    "wu2.s5p": "Mình báo cáo qua GitHub Security Advisory. Maintainer phản hồi nhanh, chuyển logic sang fail-closed và bắt buộc secret khi bật webhook. Đã sửa ở 0.117.2, điểm CVSS 3.1 là 9.1 (Critical).",
    "wu3.s1h": "Mở rộng từ bài học trước",
    "wu3.s1p": "Sau CVE-2026-55640, mình đặt giả thuyết rằng thiếu xác thực là vấn đề mang tính hệ thống của cả lớp MCP server, chứ không riêng một dự án. Mình lấy danh sách các MCP server phổ biến và rà lần lượt phần khởi tạo transport.",
    "wu3.s2h": "Cái bẫy mang tên CORS",
    "wu3.s2p": "Ở netbox-mcp-server, thoạt nhìn có vẻ ổn vì <code>\"Authorization\"</code> xuất hiện trong code. Nhưng nó chỉ nằm trong danh sách header được CORS cho phép. CORS là chính sách của trình duyệt, không hề chặn được một request gửi bằng curl.",
    "wu3.s3h": "Kiểm chứng bằng cách tìm thứ không tồn tại",
    "wu3.s3p": "FastMCP chỉ bật auth middleware khi <code>mcp.auth</code> có giá trị. Mình grep toàn bộ codebase và không tìm thấy một dòng nào gán thuộc tính đó. Đôi khi bằng chứng thuyết phục nhất của một lỗ hổng là sự vắng mặt hoàn toàn của đoạn code lẽ ra phải có.",
    "wu3.s4h": "Tài liệu cũng là một phần của lỗ hổng",
    "wu3.s4p": "README hướng dẫn chạy Docker với <code>HOST=0.0.0.0</code> và publish port ở ba chỗ khác nhau, không lần nào nhắc tới xác thực. Người dùng làm đúng theo tài liệu sẽ tự phơi dữ liệu hạ tầng của mình ra mạng - nên mình đưa thêm CWE-1059 vào báo cáo.",
    "wu3.s5h": "Báo cáo &amp; kết quả",
    "wu3.s5p": "NetBox Labs tiếp nhận và phát hành 1.2.1 kèm cập nhật tài liệu. CVE được cấp với điểm 5.9 (Moderate) - thấp hơn hai CVE trước vì chỉ ảnh hưởng tới tính bí mật.",
    "wu4.s1h": "Đọc lại chính bản vá của mình",
    "wu4.s1p": "Sau khi v5.0.0 ra mắt để vá CVE-2026-55849, mình không đóng hồ sơ mà đọc lại bản vá. Một thay đổi ở tầng sinh process là đúng chỗ dễ sinh ra lỗi mới nhất: người sửa đang bận nghĩ về lỗi cũ, không nghĩ về những đường đi khác.",
    "wu4.s2h": "Bản vá không chỉ là một dòng",
    "wu4.s2p": "v5.0.0 không đơn thuần đổi <code>execSync</code> thành <code>execFileSync</code>. Nó còn thêm một nhánh chỉ chạy trên Windows dành cho file <code>.cmd</code>/<code>.bat</code>, và nhánh đó gọi thẳng tên một shell: <code>cmd.exe</code>. Bất kỳ đoạn code nào tự tay gọi shell đều đáng xem lại lần hai.",
    "wu4.s3h": "Node và cmd.exe không nói cùng một ngôn ngữ",
    "wu4.s3p": "Node ghép mảng tham số thành command line theo quy ước <code>CommandLineToArgvW</code> - bọc dấu nháy kép, escape dấu nháy bằng dấu gạch chéo ngược. Nhưng <code>cmd.exe</code> không dùng bộ luật đó: nó xử lý <code>&amp;</code>, <code>|</code>, <code>&gt;</code>, <code>^</code> trước, và không hiểu <code>&#92;&quot;</code>. Đây đúng là lớp lỗi mà chính Node.js đã phải vá ở CVE-2024-27980.",
    "wu4.s4h": "Nhánh nguy hiểm lại là nhánh mặc định",
    "wu4.s4p": "Điểm khiến mức nghiêm trọng không giảm so với CVE cũ: trên Windows, việc dò npm hệ thống chạy <code>where npm</code>, và lệnh này gần như luôn trả về <code>npm.cmd</code>. Nghĩa là nhánh <code>cmd.exe</code> không phải trường hợp hiếm - nó là đường đi bình thường của mọi người dùng Windows.",
    "wu4.s5h": "Báo cáo &amp; kết quả",
    "wu4.s5p": "Mình báo cáo lại cho maintainer kèm PoC chạy trên Windows. Lần này họ bỏ hẳn nhánh <code>cmd.exe</code> thay vì chỉ escape thêm: v6.0.0 luôn phân giải về npm CLI dạng <code>.js</code> rồi gọi qua <code>node</code> với <code>shell: false</code>. CVE được cấp với điểm CVSS 4.0 là 8.5 (High) - bằng đúng CVE trước đó.",

    "wu5.s1h": "Đổi lớp lỗi, giữ nguyên cách nghĩ",
    "wu5.s1p": "Sau mấy CVE về command injection, mình chuyển sang một lớp lỗi họ hàng: code injection. Cách chọn mục tiêu vẫn thế - tìm nơi chương trình tự sinh ra mã rồi chạy chính nó bằng <code>new Function()</code> hay <code>eval</code>. pbf là thư viện protobuf nằm dưới Mapbox GL JS và rất nhiều pipeline vector tile, và <code>compile.js</code> của nó đúng là một code generator.",
    "wu5.s2h": "Đã có hàng rào nghĩa là mối nguy đã được thừa nhận",
    "wu5.s2p": "Một phiên bản trước đó đã thêm <code>validateIdentifier()</code> để chặn injection qua tên field. Với mình, một hàng rào có sẵn là tin tốt chứ không phải dấu hiệu nên bỏ qua: nó xác nhận mô hình nguy cơ đã được chính tác giả thừa nhận, và việc còn lại chỉ là kiểm kê xem hàng rào có phủ hết mọi lối vào hay chưa.",
    "wu5.s3h": "Đối chiếu hai danh sách",
    "wu5.s3p": "Mình liệt kê mọi giá trị lấy từ schema được nội suy vào chuỗi mã sinh ra, rồi đặt cạnh danh sách những giá trị thực sự đi qua <code>validateIdentifier()</code>. Tên message, tên field, tên oneof, tên enum value đều có mặt ở cả hai. <code>field.tag</code> chỉ có ở danh sách đầu - và nó xuất hiện ở cả nhánh đọc lẫn nhánh ghi.",
    "wu5.s4h": "Vì sao lỗ hổng sống sót: kiểu dữ liệu nói dối",
    "wu5.s4p": "Tag về mặt khái niệm là số nguyên, nên không ai nghĩ nó cần lọc. Nhưng đây là JavaScript và schema chỉ là object thuần - không có gì bắt buộc <code>tag</code> phải là number. Thêm nữa, parser <code>.proto</code> luôn ép tag qua <code>Number()</code>, nên đúng luồng được tài liệu hóa thì lỗi không bao giờ lộ ra. Vector chỉ mở khi ứng dụng nhận schema dạng object từ bên ngoài.",
    "wu5.s5h": "Báo cáo &amp; kết quả",
    "wu5.s5p": "Mình gửi báo cáo riêng qua chương trình bug bounty của Mapbox trên HackerOne. Họ xử lý rất nhanh: chỉ một ngày sau, v5.1.2 lên kệ với <code>validateTag()</code> thêm vào đúng vòng lặp đã có <code>validateIdentifier()</code>, kèm release note ghi rõ đây là bản vá cho một lỗ hổng của compiler. Báo cáo được ghi nhận hợp lệ và được thưởng $1,000. Vì báo cáo gốc vẫn ở chế độ riêng tư, ở đây mình chỉ mô tả lớp lỗi, cách tiếp cận cùng bản vá công khai, không đăng PoC và không nêu chi tiết nội bộ của report.",
    "wu6.s1h": "Đổi câu hỏi khi soi MCP server",
    "wu6.s1p": "Hai finding MCP trước của mình đều xoay quanh câu hỏi “ai gọi được tool”. Lần này mình đổi sang “tham số của tool đi tới đâu”. MCP đưa tham số do mô hình sinh ra vào thẳng hàm xử lý, nên mọi sink thực thi lệnh trong một MCP server đều đáng đọc kỹ.",
    "wu6.s2h": "Tìm sink trước, nguồn sau",
    "wu6.s2p": "Mình grep các hàm sinh process trong repo và dừng ở <code>prepare-ios-simulator.ts</code>: bốn lời gọi <code>execAsync</code> đều dựng bằng template literal. Template literal đi kèm <code>exec</code> gần như luôn là dấu hiệu của chuỗi lệnh được ghép tay.",
    "wu6.s3h": "Truy ngược tham số udid",
    "wu6.s3p": "Lần ngược lên schema của tool, <code>udid</code> là một string tự do: không regex, không whitelist ký tự. Trong khi UDID thật của simulator chỉ là UUID hex - việc kiểm định dạng lẽ ra rất rẻ mà lại không hề có.",
    "wu6.s4h": "Phá lớp nháy kép",
    "wu6.s4p": "Giá trị được bọc trong nháy kép nên payload phải tự đóng nháy rồi mở lại để câu lệnh còn hợp lệ. Mình dựng payload đóng - chèn - mở và xác nhận bằng một lệnh vô hại ghi file ra <code>/tmp</code>, đủ chứng minh mà không đụng gì tới hệ thống.",
    "wu6.s5h": "Báo cáo &amp; kết quả",
    "wu6.s5p": "Mình báo cáo riêng qua GitHub Security Advisory kèm PoC, đề xuất chuyển sang <code>execFile</code> với mảng tham số và validate định dạng UDID. Bản vá ra ở 1.86.5, advisory được publish và ghi nhận mình là người báo cáo. Mình có đề nghị cấp CVE và đã trao đổi điều đó với maintainer, nhưng họ không gửi request - và đó vẫn là phần mình chưa hiểu của câu chuyện này.",

    "av.cap1": "Nơi mọi thứ diễn ra - đọc source lúc nửa đêm",
    "av.cap2": "Sài Gòn - Dinh Độc Lập",
    "av.cap3": "Một khoảng lặng giữa ngày dài",
    "av.cap4": "Cà phê sách - một buổi chiều rảnh rang",

    "btn.viewCode": "Xem đoạn code lỗi",
    "btn.hideCode": "Ẩn đoạn code lỗi",
    "btn.copy": "Copy",
    "btn.copied": "Đã copy",
    "btn.copyFail": "Lỗi",
    "aria.menuOpen": "Mở menu",
    "aria.menuClose": "Đóng menu",
    "aria.top": "Lên đầu trang",
    "aria.lang": "Switch to English",
    "roles": ["Security Researcher","Sinh viên An toàn thông tin @ HCMUTE","Vulnerability Researcher","Responsible Disclosure"],

    "term.hint": "Gõ lệnh, hoặc bấm nhanh:",
    "term.welcome": "Terminal tương tác - gõ <b>help</b> để xem danh sách lệnh.",
    "term.notfound": "không tìm thấy lệnh. Gõ 'help' để xem danh sách.",
    "term.help": "Các lệnh khả dụng:",
    "term.helpList": [
      ["help", "hiện danh sách lệnh này"],
      ["whoami", "thông tin nhanh về mình"],
      ["findings", "liệt kê toàn bộ finding (alias: cve, ls)"],
      ["writeup", "mở nhật ký săn lỗ hổng"],
      ["contact", "email và các kênh liên lạc"],
      ["banner", "vẽ lại banner đầu trang"],
      ["clear", "xoá màn hình"]
    ],
    "term.whoami": [
      ["handle", "fortress"],
      ["tên", "Võ Phú Vinh"],
      ["ngành", "An toàn thông tin - HCMUTE"],
      ["năm", "sinh viên năm 2"],
      ["gpa", "3.07 / 4.0"],
      ["hướng đi", "vulnerability research, responsible disclosure"],
      ["nơi ở", "TP. Hồ Chí Minh, Việt Nam"]
    ],
    "term.cveHead": "Finding đã được ghi nhận:",
    "term.cveTail": "Xem chi tiết ở bản tin trang chủ.",
    "term.contact": "Kênh liên lạc:",
    "term.goWriteup": "Đang mở nhật ký săn lỗ hổng..."
  },

  en: {
    "meta.title": "Fortress - Võ Phú Vinh | Security Researcher",
    "meta.desc": "Võ Phú Vinh (Fortress) - Information Security student at HCMUTE, security researcher with multiple assigned CVEs.",

    "nav.home": "Home",
    "nav.writeup": "Writeups",
    "nav.journey": "Journey",
    "nav.contact": "Contact",

    "hero.desc": "<strong>Information Security</strong> student at HCMUTE. I hunt for vulnerabilities in open-source projects and disclose them responsibly - <strong>multiple CVEs assigned</strong> so far.",
    "hero.btn1": "View the CVE feed",
    "hero.btn2": "Get in touch",

    "about.h2": "About <span class=\"grad-text\">me</span>",
    "about.sub": "A little about the person behind the advisories.",
    "about.p1": "I'm <strong>Võ Phú Vinh (Fortress)</strong>. I'm a <strong>student</strong> majoring in <strong>Information Security</strong> at <strong>Ho Chi Minh City University of Technology and Engineering</strong> (formerly Ho Chi Minh City University of Technology and Education).",
    "about.p2": "The path I'm currently pursuing is reading the source code of open-source projects to find vulnerabilities, then <strong>disclosing them responsibly</strong> to the maintainers before going public.",
    "fact1.k": "Education",
    "fact1.v": "Second-year student - Information Security, HCMUTE",
    "fact4.k": "Grade average",
    "fact4.v": "GPA 3.07 / 4.0",
    "fact2.k": "Focus area",
    "fact2.v": "Vulnerability research &amp; responsible disclosure",
    "fact3.k": "Email",
    "stat0": "Findings credited",
    "stat1": "CVEs assigned",
    "stat2": "Open-source projects",
    "stat3": "Distinct CWE classes",
    "stat4": "Paid bug bounty",

    "home.h2": "Vulnerability <span class=\"grad-text\">feed</span>",
    "home.sub": "Every finding I've reported - CVEs, advisories published without a CVE request, and credited bug bounty reports. Newest first; each card covers the technical summary, the impact, and the original code behind the flaw.",
    "filter.aria": "Filter by finding type",
    "filter.all": "All",
    "filter.cve": "CVE",
    "filter.advisory": "Advisory (no CVE)",
    "filter.bounty": "Bug bounty",
    "kind.advisory": "Advisory · no CVE",
    "status.state": "Status",
    "status.updated": "Last updated",
    "feed.all": "See all writeups →",
    "link.more": "Read the full writeup →",
    "link.back": "← Back to all writeups",
    "detail.arch": "How the project works",
    "detail.map": "Exactly where it lives",
    "ar1.cap": "Normally the tool reads <code>package.json</code>, shells out to npm in a child process for the dependency tree and writes an SBOM. The whole flaw sits in that one spawn step.",
    "ar2.cap": "On Windows npm resolves to <code>npm.cmd</code> - a batch file - so the tool has to go through <code>cmd.exe</code>. That is the default path for Windows users, not a rare corner case.",
    "ar3.cap": "Nextcloud pushes file events over a webhook so the MCP server can keep the Qdrant vector index in sync for the LLM client's semantic search. The webhook endpoint is the only door - and it is unlocked.",
    "ar4.cap": "The MCP server sits between the client and NetBox, and it is the one holding the NetBox token. Reaching port 8000 therefore means borrowing that token without holding any credential of your own.",
    "ar5.cap": "The client calls the <code>prepare_ios_simulator</code> tool and the server turns its arguments into an <code>xcrun simctl</code> command on the host. Note who writes those arguments: a model, not a person typing.",
    "ar6.cap": "pbf takes a schema and generates its reader/writer code with <code>new Function()</code>. It is a genuine code generator, so every value in the schema is potential source code, not just data.",
    "cm1.cap": "Zooming in: repo → <code>src/npmRunner.ts</code> → the executor branch taken when <code>npm_execpath</code> is empty → one single <code>execSync</code> line. The green line is the 5.0.0 patch that replaced it.",
    "cm2.cap": "Same file, but this time the Windows-only branch: Node quotes the arguments and then hands them to <code>cmd.exe</code> to parse again. The green line is how 6.0.0 removed the shell entirely.",
    "cm3.cap": "The dashed line is the guard that should have been there: refuse the request when the secret is unset. Because it does not exist, the <code>else</code> branch just logs and lets the request through.",
    "cm4.cap": "No line ever assigns <code>mcp.auth</code>, so FastMCP attaches no auth middleware - CORS is the whole stack, and <code>mcp.run()</code> opens the port to everyone.",
    "cm5.cap": "Two of the four call sites interpolate <code>udid</code> straight into the command string; the dashed line is the UDID format check that only arrived with the 1.86.5 patch.",
    "cm6.cap": "The identifier-validation loop sits right next to the line that interpolates the tag - one missing <code>validateTag()</code> call, which is exactly what 5.1.2 added.",
    "detail.diagram": "How the attack flows",
    "stats.h": "Findings at a glance",
    "stats.sub": "The CVSS score of every finding, read straight from the list below - tap a row to open its writeup.",
    "stats.scale": "CVSS scale 0 → 10",
    "dg1.cap": "<b>Two branches, one way out.</b> With <code>npm_execpath</code> set, the tool calls <code>execFileSync</code> and the arguments travel as an array - no shell involved. Only when the variable is empty does the fallback concatenate everything into one string and hand it to a shell, where every metacharacter in <code>--workspace</code> is read as a command.",
    "dg2.cap": "<b>One string, two rulebooks.</b> Node joins the argument array using <code>CommandLineToArgvW</code> quoting and trusts that the quotes wrap the value. <code>cmd.exe</code> instead handles <code>&amp; | &gt; ^</code> before quotes and does not understand <code>\\\"</code> - so that exact command line splits into two commands.",
    "dg3.cap": "<b>Two defects stacked on top of each other.</b> The signature check sits inside <code>if secret:</code>, so in the default configuration it never runs - the request continues after a single warning line. Right after that, the user identity is read from the request body itself, so the attacker picks who they are.",
    "dg4.cap": "<b>The brick that was never laid.</b> The middleware stack holds only CORS; FastMCP attaches its auth layer only when <code>mcp.auth</code> has a value, and that value is never set. Anyone who can reach the port opens a valid session and calls all four tools.",
    "dg5.cap": "<b>The quotes belong to the attacker.</b> <code>udid</code> is interpolated between two double quotes, so closing the quote early turns everything after it into its own command; the trailing <code>echo \"x</code> re-opens the quote so the line never raises a syntax error.",
    "dg6.cap": "<b>The fence was built, one post short.</b> Every identifier taken from the schema goes through <code>validateIdentifier()</code> before it is interpolated into the generated source - every one except <code>field.tag</code>, which lands in that same string.",
    "detail.code": "The code behind the flaw",
    "detail.process": "How I found it",
    "c5.teaser": "Mapbox's protobuf library builds its codec with <code>new Function()</code>; every schema identifier is validated except <code>field.tag</code> - enough to smuggle arbitrary JavaScript into the generated reader and writer.",
    "c4.teaser": "The patch for CVE-2026-55849 kept the shell out on Linux but left a Windows-only <code>cmd.exe /c</code> branch behind - <code>--workspace</code> still injects commands.",
    "c1.teaser": "OS command injection through the <code>--workspace</code> option of an SBOM generator that runs automatically inside CI/CD pipelines.",
    "c2.teaser": "A webhook endpoint left unauthenticated by default, plus a uid read straight from the payload - enough to wipe every user's vector index.",
    "c3.teaser": "An MCP endpoint wide open under <code>TRANSPORT=http</code>, exposing all NetBox infrastructure data without any credentials.",
    "label.summary": "Summary",
    "label.impact": "Impact",

    "c5.summary": "pbf's <code>compile.js</code> builds JavaScript source as a string and then runs it through <code>new Function()</code>. Every identifier taken from the schema - message name, field name, oneof name, enum value name - is passed through <code>validateIdentifier()</code> first, except <code>field.tag</code>. The tag value is inserted straight into the generated code with no checks at all, so a schema whose <code>field.tag</code> is a string can carry arbitrary JavaScript into both the compiled reader and the compiled writer.",
    "c5.impact": "Any application that calls <code>compile()</code> / <code>compileRaw()</code> on a protobuf schema coming from user-controlled input - a schema descriptor received as JSON or over an API, for instance - will execute attacker-supplied JavaScript inside its own process. The attacker only has to submit a schema where one field's tag is a crafted string; as soon as the victim compiles that schema, the code runs with the privileges of the victim process, while the message still decodes to a normal-looking value so the injection never shows up in the output. Scope: the documented <code>.proto</code> path (<code>schema.parse</code>) is not affected, since tags are always <code>Number()</code>-coerced there - the vector is the schema-object API only.",
    "c5.path1": "compile.js - v5.1.1 and earlier",
    "c5.note1": "<b>The flaw:</b> <span>That whole string eventually goes into <code>new Function()</code>. A tag is conceptually an integer, but the schema is just a plain JavaScript object - nothing forces <code>tag</code> to actually be a number, which turns it into an entrance nobody was watching.</span>",
    "c5.note2": "<b>The fix:</b> <span>The patch adds <code>validateTag()</code> to the very loop that already ran <code>validateIdentifier()</code>: a tag must be an integer within <code>[1, 2^29 - 1]</code>, numeric strings are still accepted so the <code>.proto</code> path keeps working, and anything else throws.</span>",
    "c5.ver1": "Affected: ≤ 5.1.1 (verified on 5.1.0)",
    "c5.ver2": "Fixed in: 5.1.2",
    "c5.ver3": "Not affected: the .proto path via schema.parse",
    "c6.teaser": "The <code>udid</code> parameter flows straight into a shell command in the <code>prepare_ios_simulator</code> tool - any connected MCP client can run arbitrary commands on the host.",
    "c6.summary": "The <code>prepare_ios_simulator</code> tool takes the <code>udid</code> parameter from the MCP client and interpolates it straight into shell commands through <code>execAsync</code>, at four separate call sites. The only protection is the pair of double quotes wrapped around the value - but those quotes sit inside a string the attacker controls, so closing the quote early is enough to break out of the intended command.",
    "c6.impact": "Any MCP client connected to the server can execute arbitrary OS commands on the host with the privileges of the MCP server process - full filesystem access, credential theft, and lateral movement from there. It is especially uncomfortable in the MCP context, because tool-call parameters are usually generated by a model: untrusted content can reach <code>udid</code> without a human ever seeing it.",
    "c6.nocve": "<b>Why there is no CVE:</b> <span>The advisory is published publicly on the appium/appium-mcp repository and credits me as the reporter, but no CVE ID was ever assigned. Requesting a CVE is the maintainer's call, and they did not request one - I did want a CVE for this finding and said so, and I still do not know the reason. The consequence is that it never entered the GitHub Global Advisory Database and does not surface in <code>npm audit</code>. I still list it here, labelled for exactly what it is: a published, credited finding - not a CVE.</span>",
    "c6.path1": "src/tools/ios/prepare-ios-simulator.ts - before v1.86.5",
    "c6.note1": "<b>The flaw:</b> <span><code>execAsync</code> is Node's <code>exec()</code> - it always goes through a shell. The <code>udid</code> value arrives straight from the tool-call parameters with no format validation at all, even though a legitimate UDID is nothing but hex digits and dashes.</span>",
    "c6.note2": "<b>Why the quotes don't save it:</b> <span>The quotes added by the template literal are closed early by the payload itself. The trailing <code>echo \"x</code> exists only to reopen a quote for the rest of the command, keeping it syntactically valid so nothing errors out - and the injected command runs in full.</span>",
    "c6.ver1": "Affected: ≥ 1.49.0, ≤ 1.86.4",
    "c6.ver2": "Fixed in: 1.86.5",
    "c5.vector": "<b>CVSS 3.1</b>&nbsp; AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "badge.rewarded": "Rewarded $1,000",

    "c4.summary": "The v5.0.0 patch for CVE-2026-55849 replaced <code>execSync</code> with <code>execFileSync</code>, but it also introduced a Windows-only branch. When npm resolves to a batch file (<code>npm.cmd</code>), the tool runs <code>execFileSync('cmd.exe', ['/c', execPath, ...args])</code>. Node escapes arguments following the <code>CommandLineToArgvW</code> convention, but <code>cmd.exe</code> parses the command line with a completely different set of rules: it handles the metacharacters <code>&amp;</code>, <code>|</code>, <code>&gt;</code> and <code>^</code> first, and it does not understand <code>&#92;&quot;</code> escaping. So the user-supplied <code>--workspace</code> value can still break out of the intended command - this time only on Windows.",
    "c4.impact": "Arbitrary command execution with the privileges of the user running the CLI on Windows machines - data exfiltration, modifying or deleting files, and depending on the deployment, possible privilege escalation. Since this is still an SBOM generator running automatically inside pipelines, Windows CI runners are a direct target. Worth noting: this is the patch for an earlier CVE, so anyone who upgraded to 5.0.0 to escape CVE-2026-55849 is still in scope.",
    "c4.path1": "src/npmRunner.ts - v5.0.0",
    "c4.note1": "<b>The flaw:</b> <span><code>execFileSync</code> does not go through Node's shell - but here <code>cmd.exe</code> <em>is</em> the shell. All of <code>args</code> gets joined back into a single command line and handed to <code>cmd.exe /c</code>, which then re-parses it under its own rules.</span>",
    "c4.note2": "<b>The fix:</b> <span>v6.0.0 removes the <code>cmd.exe</code> branch entirely. It accepts only a path to the npm CLI <code>.js</code> file and throws otherwise, always spawning <code>node -- npm-cli.js</code> with <code>shell: false</code>. With no shell left in the chain, there are no metacharacters left to interpret.</span>",
    "c4.ver1": "Affected: 5.0.0 (Windows only)",
    "c4.ver2": "Fixed in: 6.0.0",
    "c4.ver3": "Workaround: point npm_execpath at npm-cli.js",

    "c1.summary": "OS command injection through the <code>--workspace &lt;value&gt;</code> option. When the <code>npm_execpath</code> environment variable is set, the tool invokes the npm executable directly and is safe. But if <code>npm_execpath</code> is empty or unset, the tool falls back to a path that spawns a subshell and concatenates <code>'npm ' + args.join(' ')</code> without escaping. Shell metacharacters such as <code>;</code>, <code>&amp;&amp;</code> and <code>|</code> are interpreted by the shell, letting an attacker break out of the intended command.",
    "c1.impact": "Arbitrary command execution with the privileges of the user running the CLI - data exfiltration, modifying or deleting files, and depending on the deployment, possible privilege escalation. Especially concerning in CI/CD, since this is an SBOM generator that usually runs automatically inside pipelines.",
    "c1.path1": "src/npmRunner.ts - before v5.0.0",
    "c1.note1": "<b>The flaw:</b> <span><code>args</code> carries the user-supplied <code>--workspace</code> value, yet it is joined into a string and handed to a shell. The comment's assumption that “we have complete control over args” is simply wrong.</span>",
    "c1.note2": "<b>The fix:</b> <span>Replace <code>execSync</code> (which goes through a shell) with <code>execFileSync</code> - arguments are passed as an array, so the shell never interprets metacharacters.</span>",
    "c1.ver1": "Affected: ≥ 2.1.0, &lt; 5.0.0",
    "c1.ver2": "Fixed in: 5.0.0",
    "c1.ver3": "Workaround: set npm_execpath",

    "c2.summary": "The <code>POST /webhooks/nextcloud</code> endpoint is unauthenticated by default, because two root causes stack up. First, <code>webhook_secret</code> defaults to <code>None</code> and no startup validator enforces it, even while vector sync is enabled. Second, the entire check sits inside an <code>if secret:</code> branch - so when the secret is unset, the check is skipped completely: it logs a single warning and then processes the request anyway.",
    "c2.impact": "An attacker needs no credentials, only network access to port 8000, to delete or force a re-index of any user's vector embeddings in Qdrant. Combined with <code>user_id</code> being read straight from the attacker-supplied payload, they can spoof a uid and loop through document IDs to wipe every user's semantic search index - recovering requires a full re-scan.",
    "c2.note1": "<b>The flaw:</b> <span>With no secret configured, execution falls into the <code>else</code> branch - it only logs a warning and keeps processing the request. Fail-open instead of fail-closed.</span>",
    "c2.note2": "<b>The flaw:</b> <span>The user identity is read straight from the request body and never checked against a session or token - a trust boundary violation that allows uid spoofing.</span>",
    "c2.ver1": "Affected: ≤ 0.117.1",
    "c2.ver2": "Fixed in: 0.117.2",

    "c3.summary": "When running with <code>TRANSPORT=http</code>, the MCP endpoint has no authentication layer at all. The project only attaches <code>CORSMiddleware</code> and never sets <code>mcp.auth</code>, while FastMCP enables its auth middleware only when <code>mcp.auth</code> has a value. As a result, anyone who can reach the port can open a valid session and call all four NetBox tools. Worse, the README documents Docker usage with <code>HOST=0.0.0.0</code> and <code>-p 8000:8000</code> in three places without mentioning authentication once.",
    "c3.impact": "Full read access to all NetBox data without credentials - devices, IPs, VLANs, racks, circuits, VMs, and the changelog containing usernames. Complete loss of confidentiality; integrity and availability are unaffected.",
    "c3.note1": "<b>The flaw:</b> <span>Nothing anywhere in the codebase assigns <code>mcp.auth</code>. <code>\"Authorization\"</code> appears only in the list of allowed CORS headers - and CORS is a browser policy, not authentication.</span>",
    "c3.ver1": "Affected: ≤ 1.2.0",
    "c3.ver2": "Fixed in: 1.2.1",

    "link.cve": "View the record on cve.org ↗",
    "link.ghsa": "View the GHSA advisory ↗",
    "link.patch": "View the patch (PR #149) ↗",

    "journey.h2": "My <span class=\"grad-text\">journey</span>",
    "journey.sub": "Milestones, most recent first, dated by advisory publication or by the day the report was accepted.",
    "tlb.time": "Patched Jul 9, 2026 · Mapbox bug bounty · HIGH",
    "tlb.p": "<code>compile.js</code> generates code through <code>new Function()</code> but skipped <code>field.tag</code> during identifier validation - an attacker-supplied schema could run arbitrary JavaScript. Mapbox shipped the fix in version 5.1.2 just one day after I reported it.",
    "tl0.time": "Disclosed Jul 7, 2026 · CVE-2026-71538 · HIGH",
    "tla.time": "Disclosed Jun 28, 2026 · GHSA (no CVE) · HIGH",
    "tla.p": "The <code>udid</code> parameter of the <code>prepare_ios_simulator</code> tool flows straight into a shell command, letting any MCP client run arbitrary commands on the host. Fixed in version 1.86.5. The advisory was published and credited, but the maintainers never requested a CVE, so this finding has no CVE ID.",
    "tl1.time": "Disclosed Jun 18, 2026 · CVE-2026-57207 · MODERATE",
    "tl2.time": "Disclosed Jun 16, 2026 · CVE-2026-55849 · HIGH",
    "tl3.time": "Disclosed Jun 14, 2026 · CVE-2026-55640 · CRITICAL",
    "tl0.p": "The patch for CVE-2026-55849 left behind a Windows-only <code>cmd.exe /c</code> branch - <code>--workspace</code> still injects commands. Fixed in version 6.0.0.",
    "tl1.p": "The MCP endpoint has no authentication when running <code>TRANSPORT=http</code>, exposing all NetBox infrastructure data without credentials. Fixed in version 1.2.1.",
    "tl2.p": "Command injection through the <code>--workspace</code> option when <code>npm_execpath</code> is unset, leading to arbitrary command execution inside SBOM-generating CI/CD pipelines. Fixed in version 5.0.0.",
    "tl3.p": "The webhook endpoint is unauthenticated by default, and the uid comes straight from the payload - allowing every user's vector search index to be wiped. Fixed in version 0.117.2.",
    "tl4.time": "FIRST YEAR · HCMUTE",
    "tl4.h3": "Where the research started",
    "tl4.sub": "Information Security - HCMUTE",
    "tl4.p": "From my very first year I started learning the fundamentals of Information Security and reading the source code of open-source projects to hunt for vulnerabilities.",

    "contact.h2": "Let's <span class=\"grad-text\">connect</span>",
    "contact.p": "If you'd like to talk security, collaborate on research, or just say hello - send me an email or reach out through the links below.",

    "wu.h2": "Bug hunting <span class=\"grad-text\">journal</span>",
    "wu.sub": "Behind every CVE is a process of reading code, forming a hypothesis, and verifying it. Here is how I got from a suspicious line of code to a published advisory.",
    "wu1.s1h": "Why I picked this target",
    "wu1.s1p": "SBOM generators run automatically inside the CI/CD pipelines of a great many projects, usually with fairly broad permissions. A command execution flaw here reaches much further than one in a single application, so build-time tooling is where I look first.",
    "wu1.s2h": "The first clue",
    "wu1.s2p": "I grepped the whole codebase for process-spawning calls: <code>exec</code>, <code>execSync</code>, <code>spawn</code>. Right in <code>npmRunner.ts</code> sat a reassuring comment claiming it was “okay since we have complete control over args”. Comments like that usually mark an assumption nobody revisited after the code changed.",
    "wu1.s3h": "Tracing the data flow",
    "wu1.s3p": "Walking back from the <code>execSync</code> call up to the CLI, I found that the <code>--workspace</code> option value flows straight into the <code>args</code> array with no sanitisation anywhere along the way. The comment's assumption collapses: part of <code>args</code> comes from the user.",
    "wu1.s4h": "What triggers it",
    "wu1.s4p": "The dangerous branch only runs when <code>npm_execpath</code> is empty or unset - that is, when the tool is invoked directly rather than through an npm script. That is exactly why the bug survived so long: on the most common path, execution takes the safe branch.",
    "wu1.s5h": "Report &amp; outcome",
    "wu1.s5p": "I reported it privately to the maintainers with a minimal PoC and suggested replacing <code>execSync</code> with <code>execFileSync</code>. The patch shipped in v5.0.0, and the CVE was assigned a CVSS 4.0 score of 8.5 (High).",
    "wu2.s1h": "The context",
    "wu2.s1p": "MCP servers are a very young layer of software, appearing fast and mostly written on the assumption that they only ever run on someone's personal machine. That assumption tends to stop holding the moment a user puts one in a container and exposes a port.",
    "wu2.s2h": "The anomaly",
    "wu2.s2p": "I went through every route that accepts outside requests and stopped at the webhook receiver. The entire signature check sits inside a single <code>if secret:</code> block - meaning that if no secret exists, the check simply never runs.",
    "wu2.s3h": "Confirming the default",
    "wu2.s3p": "I checked the settings layer: <code>webhook_secret</code> defaults to <code>None</code>, and no startup validator enforces it even when vector sync is turned on. So the project's default configuration is also its unauthenticated configuration.",
    "wu2.s4h": "Raising the severity",
    "wu2.s4p": "Reading further into the parser, I found <code>user_id</code> being taken straight from the request payload. An attacker not only reaches the endpoint but also gets to choose who they are - enough to walk through document IDs and wipe every user's vector index.",
    "wu2.s5h": "Report &amp; outcome",
    "wu2.s5p": "I reported it through a GitHub Security Advisory. The maintainer responded quickly, switched the logic to fail-closed, and made the secret mandatory when webhooks are enabled. Fixed in 0.117.2, with a CVSS 3.1 score of 9.1 (Critical).",
    "wu3.s1h": "Building on the previous lesson",
    "wu3.s1p": "After CVE-2026-55640 I hypothesised that missing authentication was systemic across the whole MCP server ecosystem rather than specific to one project. I took a list of popular MCP servers and reviewed their transport setup one by one.",
    "wu3.s2h": "The CORS trap",
    "wu3.s2p": "In netbox-mcp-server things looked fine at first glance because <code>\"Authorization\"</code> did appear in the code. But it only appears in the list of headers CORS permits. CORS is a browser policy; it stops nothing sent with curl.",
    "wu3.s3h": "Proving it by finding nothing",
    "wu3.s3p": "FastMCP only enables its auth middleware when <code>mcp.auth</code> has a value. I grepped the entire codebase and found not one line assigning that attribute. Sometimes the most convincing evidence of a vulnerability is the complete absence of the code that should have been there.",
    "wu3.s4h": "Documentation is part of the vulnerability",
    "wu3.s4p": "The README shows Docker usage with <code>HOST=0.0.0.0</code> and a published port in three separate places, never once mentioning authentication. A user following the documentation correctly ends up exposing their own infrastructure data to the network - which is why I included CWE-1059 in the report.",
    "wu3.s5h": "Report &amp; outcome",
    "wu3.s5p": "NetBox Labs took it on and shipped 1.2.1 along with documentation updates. The CVE was assigned 5.9 (Moderate) - lower than the previous two because only confidentiality is affected.",
    "wu4.s1h": "Re-reading my own patch",
    "wu4.s1p": "After v5.0.0 shipped to fix CVE-2026-55849, I did not close the file - I read the patch again. A change at the process-spawning layer is exactly where a fresh bug tends to appear: whoever writes the fix is busy thinking about the old flaw, not about the other paths through the code.",
    "wu4.s2h": "The patch was more than one line",
    "wu4.s2p": "v5.0.0 did not simply swap <code>execSync</code> for <code>execFileSync</code>. It also added a Windows-only branch for <code>.cmd</code>/<code>.bat</code> files, and that branch names a shell outright: <code>cmd.exe</code>. Any code that reaches for a shell by hand deserves a second look.",
    "wu4.s3h": "Node and cmd.exe do not speak the same language",
    "wu4.s3p": "Node joins the argument array into a command line following the <code>CommandLineToArgvW</code> convention - wrap in double quotes, escape quotes with a backslash. But <code>cmd.exe</code> does not use those rules: it processes <code>&amp;</code>, <code>|</code>, <code>&gt;</code> and <code>^</code> first, and it has no idea what <code>&#92;&quot;</code> means. This is precisely the bug class Node.js itself had to patch in CVE-2024-27980.",
    "wu4.s4h": "The dangerous branch is the default one",
    "wu4.s4p": "This is what kept the severity level with the previous CVE: on Windows, the system npm lookup runs <code>where npm</code>, and that command almost always returns <code>npm.cmd</code> first. So the <code>cmd.exe</code> branch is not a rare edge case - it is the ordinary path for every Windows user.",
    "wu4.s5h": "Report &amp; outcome",
    "wu4.s5p": "I reported back to the maintainers with a PoC that runs on Windows. This time they dropped the <code>cmd.exe</code> branch altogether rather than adding more escaping: v6.0.0 always resolves to the npm CLI <code>.js</code> file and spawns it through <code>node</code> with <code>shell: false</code>. The CVE was assigned a CVSS 4.0 score of 8.5 (High) - the same as the previous one.",

    "wu5.s1h": "A different bug class, the same way of thinking",
    "wu5.s1p": "After a run of command injection CVEs I moved to a close relative: code injection. The way I pick targets did not change - look for places where a program writes its own source and then runs it through <code>new Function()</code> or <code>eval</code>. pbf is the protobuf library sitting underneath Mapbox GL JS and a great many vector tile pipelines, and its <code>compile.js</code> is exactly that: a code generator.",
    "wu5.s2h": "An existing guard means the risk is already acknowledged",
    "wu5.s2p": "An earlier release had added <code>validateIdentifier()</code> to block injection through field names. To me an existing guard is good news rather than a reason to move on: it confirms the threat model was accepted by the authors themselves, and all that remains is taking inventory of whether the guard covers every entrance.",
    "wu5.s3h": "Comparing the two lists",
    "wu5.s3p": "I listed every schema-derived value that gets interpolated into the generated source string, then placed it next to the list of values that actually pass through <code>validateIdentifier()</code>. Message names, field names, oneof names and enum value names appear on both. <code>field.tag</code> appears only on the first - and it shows up in the read path as well as the write path.",
    "wu5.s4h": "Why it survived: the type lies",
    "wu5.s4p": "A tag is conceptually an integer, so nobody thought it needed sanitising. But this is JavaScript and the schema is a plain object - nothing requires <code>tag</code> to be a number. On top of that, the <code>.proto</code> parser always coerces tags through <code>Number()</code>, so along the documented path the flaw never surfaces. The vector only opens when an application accepts a schema object from outside.",
    "wu5.s5h": "Report &amp; outcome",
    "wu5.s5p": "I submitted the report privately through Mapbox's bug bounty programme on HackerOne. They moved fast: just one day later v5.1.2 shipped with <code>validateTag()</code> added to the very loop that already ran <code>validateIdentifier()</code>, and the release notes state plainly that it fixes a vulnerability in the compiler. The report was accepted as valid and rewarded $1,000. Since the original report is still private, I only cover the bug class, the approach and the public patch here: no PoC and no internal report details.",
    "wu6.s1h": "Changing the question I ask of an MCP server",
    "wu6.s1p": "My two previous MCP findings both revolved around “who can call the tool”. This time I switched to “where do the tool's parameters end up”. MCP feeds model-generated parameters straight into the handler, which makes every command-execution sink in an MCP server worth reading closely.",
    "wu6.s2h": "Sink first, source second",
    "wu6.s2p": "I grepped the repository for process-spawning calls and stopped at <code>prepare-ios-simulator.ts</code>: four <code>execAsync</code> calls, all built from template literals. A template literal next to <code>exec</code> is almost always a hand-assembled command string.",
    "wu6.s3h": "Tracing the udid parameter",
    "wu6.s3p": "Walking back up to the tool schema, <code>udid</code> is a free-form string: no regex, no character allow-list. A real simulator UDID is just a hex UUID, so validating the format would have been cheap - and it simply was not there.",
    "wu6.s4h": "Breaking out of the quotes",
    "wu6.s4p": "The value is wrapped in double quotes, so the payload has to close the quote and reopen it to keep the command valid. I built a close-inject-reopen payload and confirmed it with a harmless command writing a file into <code>/tmp</code> - enough to prove the issue without touching anything on the system.",
    "wu6.s5h": "Report &amp; outcome",
    "wu6.s5p": "I reported it privately through a GitHub Security Advisory with a PoC, suggesting a switch to <code>execFile</code> with an argument array plus UDID format validation. The patch shipped in 1.86.5 and the advisory was published crediting me as the reporter. I did ask for a CVE and raised it with the maintainers, but no request was filed - and that part I still do not understand.",

    "av.cap1": "Where it all happens - reading source at midnight",
    "av.cap2": "Saigon - Independence Palace",
    "av.cap3": "A quiet moment in a long day",
    "av.cap4": "A book café - an easy afternoon",

    "btn.viewCode": "View vulnerable code",
    "btn.hideCode": "Hide vulnerable code",
    "btn.copy": "Copy",
    "btn.copied": "Copied",
    "btn.copyFail": "Failed",
    "aria.menuOpen": "Open menu",
    "aria.menuClose": "Close menu",
    "aria.top": "Back to top",
    "aria.lang": "Chuyển sang tiếng Việt",
    "roles": ["Security Researcher","Information Security student @ HCMUTE","Vulnerability Researcher","Responsible Disclosure"],

    "term.hint": "Type a command, or tap:",
    "term.welcome": "Interactive terminal - type <b>help</b> to list the commands.",
    "term.notfound": "command not found. Type 'help' for the list.",
    "term.help": "Available commands:",
    "term.helpList": [
      ["help", "show this list of commands"],
      ["whoami", "a quick rundown of who I am"],
      ["findings", "list every finding (alias: cve, ls)"],
      ["writeup", "open the bug hunting journal"],
      ["contact", "email and other channels"],
      ["banner", "redraw the header banner"],
      ["clear", "clear the screen"]
    ],
    "term.whoami": [
      ["handle", "fortress"],
      ["name", "Võ Phú Vinh"],
      ["major", "Information Security - HCMUTE"],
      ["year", "second-year student"],
      ["gpa", "3.07 / 4.0"],
      ["focus", "vulnerability research, responsible disclosure"],
      ["based in", "Ho Chi Minh City, Vietnam"]
    ],
    "term.cveHead": "Findings credited:",
    "term.cveTail": "Full details are in the feed on the home page.",
    "term.contact": "Contact channels:",
    "term.goWriteup": "Opening the bug hunting journal..."
  }
};

let lang = "vi";
try{
  const saved = localStorage.getItem("fortress-lang");
  if(saved === "vi" || saved === "en") lang = saved;
}catch(err){}

const t = key => (I18N[lang][key] !== undefined ? I18N[lang][key] : I18N.vi[key]);

const langBtn = document.getElementById("langBtn");
const metaDesc = document.getElementById("metaDesc");
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
const toTop = document.getElementById("toTop");
const typingEl = document.getElementById("typing");

// Mỗi card là một finding; data-kind cho biết nó được ghi nhận dưới dạng nào:
// cve (có CVE ID), advisory (publish nhưng không xin CVE), bounty (bug bounty).
// Đếm tách bạch để một finding không có CVE không bao giờ bị cộng vào số CVE.
const findingCards = [...document.querySelectorAll("#cve .cve")];
const countKind = kind => findingCards.filter(c => c.dataset.kind === kind).length;
const statCounts = {
  find: findingCards.length,
  cve: countKind("cve"),
  advisory: countKind("advisory"),
  bounty: countKind("bounty"),
  pkg: new Set([...document.querySelectorAll("#cve .pkg")].map(el => el.textContent.trim())).size,
  cwe: new Set(
    [...document.querySelectorAll("#cve .cwe-row .tag")]
      .map(el => (el.textContent.match(/CWE-\d+/) || [])[0])
      .filter(Boolean)
  ).size
};
document.querySelectorAll(".stat .num[data-stat]").forEach(el => {
  if(statCounts[el.dataset.stat] !== undefined) el.dataset.count = statCounts[el.dataset.stat];
});

const cveList = document.querySelector("#cve .cve-list");
[...cveList.querySelectorAll(".cve")]
  .sort((a, b) => (b.dataset.date || "").localeCompare(a.dataset.date || ""))
  .forEach(el => { el.classList.remove("d1", "d2", "d3"); cveList.appendChild(el); });

const wuIndex = document.getElementById("wuIndex");
[...cveList.querySelectorAll(".cve")].forEach(card => wuIndex.appendChild(card.cloneNode(true)));

// ── Bảng thống kê ở đầu trang writeup ────────────────────────────────────────
// Số liệu đọc ngược từ chính các card finding, nên thêm một finding mới là
// biểu đồ tự cập nhật theo - không có bảng số nào chép tay ở đây.
const statBoard = document.getElementById("statBoard");
const SEV_CLASS = {Critical:"crit", High:"high", Moderate:"mod", Low:"low"};

function boardRows(){
  return [...cveList.querySelectorAll(".cve")].map(c => ({
    id:    c.querySelector(".cve-id").textContent.trim(),
    pkg:   c.querySelector(".pkg").textContent.trim(),
    score: parseFloat(c.querySelector(".score .val").textContent) || 0,
    std:   c.querySelector(".score .of").textContent.trim(),
    sev:   c.querySelector(".sev-label").textContent.trim(),
    slug:  c.dataset.slug
  })).sort((a, b) => b.score - a.score);
}

function buildBoard(){
  if(!statBoard) return;
  const rows = boardRows();
  const count = {};
  rows.forEach(r => { count[r.sev] = (count[r.sev] || 0) + 1; });
  const keys = ["Critical", "High", "Moderate", "Low"].filter(s => count[s]).map(s =>
    '<span class="key s-' + SEV_CLASS[s] + '"><i></i>' + s + "<b>" + count[s] + "</b></span>").join("");

  const bars = rows.map(r => {
    const cls = "s-" + (SEV_CLASS[r.sev] || "high");
    return '<a class="bar-row ' + cls + '" href="#/' + r.slug + '" title="' + r.pkg + " · " + r.std + '">' +
      '<span class="bar-name"><b>' + r.id + "</b><i>" + r.pkg + "</i></span>" +
      '<span class="bar-track"><span class="bar-fill" data-w="' + (r.score * 10) + '%"></span></span>' +
      '<span class="bar-val">' + r.score.toFixed(1) + "<i>" + r.std.replace("CVSS ", "v") + "</i></span>" +
      '<span class="bar-sev">' + r.sev + "</span></a>";
  }).join("");

  statBoard.innerHTML =
    '<div class="board-head"><div><h3>' + t("stats.h") + "</h3><p>" + t("stats.sub") + "</p></div>" +
    '<div class="board-keys">' + keys + "</div></div>" +
    '<div class="board-bars">' + bars + "</div>" +
    '<div class="board-axis"><span></span><span class="ticks"><i>0</i><i>5</i><i>10</i></span>' +
    '<span class="note">' + t("stats.scale") + "</span></div>";
  showBars(statBoard);
}

// Thanh chạy từ 0 tới điểm thật, cùng cách với vòng tròn CVSS trên card.
function showBars(scope){
  scope.querySelectorAll(".bar-fill").forEach(b => {
    setTimeout(() => b.style.setProperty("--w", b.dataset.w), 200);
  });
}

// Bộ lọc theo loại finding. Loại nào chưa có card nào thì không hiện nút.
const filterBar = document.getElementById("filters");
const KINDS = ["all", "cve", "advisory", "bounty"];
let activeKind = "all";
function buildFilters(){
  filterBar.innerHTML = "";
  const legend = document.createElement("legend");
  legend.className = "sr-only";
  legend.textContent = t("filter.aria");
  filterBar.appendChild(legend);
  KINDS.forEach(kind => {
    const n = kind === "all" ? findingCards.length : countKind(kind);
    if(!n) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.kind = kind;
    btn.setAttribute("aria-pressed", String(kind === activeKind));
    btn.innerHTML = t("filter." + kind) + '<span class="n">' + n + "</span>";
    btn.addEventListener("click", () => { activeKind = kind; applyFilter(); });
    filterBar.appendChild(btn);
  });
}
function applyFilter(){
  findingCards.forEach(c => {
    c.classList.toggle("hide", activeKind !== "all" && c.dataset.kind !== activeKind);
  });
  filterBar.querySelectorAll("button").forEach(b => {
    b.setAttribute("aria-pressed", String(b.dataset.kind === activeKind));
  });
}

document.querySelectorAll(".cve[data-date]").forEach(card => {
  const chip = document.createElement("span");
  chip.className = "date-chip";
  card.querySelector(".cve-head").appendChild(chip);
});

function fmtDate(d){
  return lang === "vi"
    ? d.toLocaleDateString("vi-VN", {day:"2-digit", month:"2-digit", year:"numeric"})
    : d.toLocaleDateString("en-US", {month:"short", day:"numeric", year:"numeric"});
}
let lastPush = null;
function renderStatus(){
  document.querySelectorAll(".cve[data-date]").forEach(card => {
    card.querySelector(".date-chip").textContent = fmtDate(new Date(card.dataset.date));
  });
  if(lastPush) document.getElementById("lastUpdate").textContent = fmtDate(lastPush);
}

fetch("https://api.github.com/repos/fortress07/profile/commits/main")
  .then(r => r.ok ? r.json() : null)
  .then(d => {
    const iso = d && d.commit && d.commit.committer && d.commit.committer.date;
    if(iso){ lastPush = new Date(iso); renderStatus(); }
  })
  .catch(() => {});

function applyLang(){
  document.documentElement.lang = lang;
  document.title = t("meta.title");
  metaDesc.setAttribute("content", t("meta.desc"));

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = t(el.dataset.i18n);
    if(typeof v === "string") el.innerHTML = v;
  });

  document.querySelectorAll(".code-toggle").forEach(btn => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.querySelector(".lbl").textContent = open ? t("btn.hideCode") : t("btn.viewCode");
  });
  document.querySelectorAll(".copy").forEach(btn => {
    if(!btn.classList.contains("done")) btn.textContent = t("btn.copy");
  });
  renderStatus();
  buildFilters();
  buildBoard();
  if(typeof buildHints === "function"){
    buildHints();
    termOut.innerHTML = "";
    termBanner();
    avCap.textContent = t("av.cap" + (avI + 1));
  }

  const menuOpen = navLinks.classList.contains("open");
  burger.setAttribute("aria-label", menuOpen ? t("aria.menuClose") : t("aria.menuOpen"));
  toTop.setAttribute("aria-label", t("aria.top"));
  langBtn.setAttribute("aria-label", t("aria.lang"));
  langBtn.querySelector(".vi").classList.toggle("on", lang === "vi");
  langBtn.querySelector(".en").classList.toggle("on", lang === "en");

  restartTyping();
}

langBtn.addEventListener("click", () => {
  lang = lang === "vi" ? "en" : "vi";
  try{ localStorage.setItem("fortress-lang", lang); }catch(err){}
  applyLang();
});

let typeTimer = null, ri = 0, ci = 0, deleting = false;
function restartTyping(){
  clearTimeout(typeTimer);
  ri = 0; ci = 0; deleting = false;
  typingEl.textContent = "";
  typeStep();
}
function typeStep(){
  const roles = t("roles");
  const word = roles[ri % roles.length];
  typingEl.textContent = word.slice(0, ci);
  let delay;
  if(!deleting && ci < word.length){ ci++; delay = 58; }
  else if(!deleting){ deleting = true; delay = 1900; }
  else if(ci > 0){ ci--; delay = 24; }
  else { deleting = false; ri = (ri + 1) % roles.length; delay = 320; }
  typeTimer = setTimeout(typeStep, delay);
}

function runCounter(el){
  if(el.dataset.done) return;
  el.dataset.done = "1";
  const target = parseFloat(el.dataset.count);
  const dur = 1200, t0 = performance.now();
  (function tick(now){
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if(p < 1) requestAnimationFrame(tick);
  })(t0);
}

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(!e.isIntersecting) return;
    const el = e.target;
    el.classList.add("show");
    if(el.dataset.count) runCounter(el);
    el.querySelectorAll("[data-count]").forEach(runCounter);
    showBars(el);
    el.querySelectorAll(".ring").forEach(r => {
      setTimeout(() => r.style.setProperty("--p", r.dataset.p), 200);
    });
    io.unobserve(el);
  });
}, {threshold:.15, rootMargin:"0px 0px -40px 0px"});
document.querySelectorAll(".reveal, h2").forEach(el => io.observe(el));

document.querySelectorAll(".code-toggle").forEach(btn => {
  const wrap = btn.nextElementSibling;
  btn.addEventListener("click", () => {
    const open = wrap.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
    btn.querySelector(".lbl").textContent = open ? t("btn.hideCode") : t("btn.viewCode");
  });
});

document.querySelectorAll(".copy").forEach(btn => {
  btn.addEventListener("click", async () => {
    const pre = btn.closest(".code").querySelector("pre");
    try{
      await navigator.clipboard.writeText(pre.innerText);
      btn.textContent = t("btn.copied");
      btn.classList.add("done");
    }catch(err){
      btn.textContent = t("btn.copyFail");
    }
    setTimeout(() => {
      btn.textContent = t("btn.copy");
      btn.classList.remove("done");
    }, 1800);
  });
});

const fine = matchMedia("(pointer:fine)").matches;
if(fine){
  const spotlight = document.getElementById("spotlight");
  addEventListener("pointermove", e => {
    spotlight.style.opacity = "1";
    spotlight.style.left = e.clientX + "px";
    spotlight.style.top = e.clientY + "px";
  }, {passive:true});
  document.querySelectorAll(".card, .cve").forEach(c => {
    c.addEventListener("pointermove", e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", (e.clientX - r.left) + "px");
      c.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, {passive:true});
  });
}else{
  const focusIO = new IntersectionObserver(entries => {
    entries.forEach(e => e.target.classList.toggle("focus", e.isIntersecting));
  }, {rootMargin:"-38% 0px -38% 0px", threshold:0});
  document.querySelectorAll(".card, .cve, .tl-item").forEach(el => focusIO.observe(el));
}

burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? t("aria.menuClose") : t("aria.menuOpen"));
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  burger.classList.remove("open");
  navLinks.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", t("aria.menuOpen"));
}));

const reduceMotion = matchMedia("(prefers-reduced-motion:reduce)").matches;
if(!reduceMotion){
  const cv = document.getElementById("matrix");
  const cx = cv.getContext("2d", {alpha:true});
  const GLYPH = "0123456789ABCDEF0101<>{}[]()/\\|$#@&*+=!?;:_";
  const STEP = 18;
  let drops = [], vw = 0, vh = 0;
  function sizeMatrix(){
    const dpr = Math.min(devicePixelRatio || 1, 2);
    vw = innerWidth; vh = innerHeight;
    cv.width = vw * dpr; cv.height = vh * dpr;
    cv.style.width = vw + "px"; cv.style.height = vh + "px";
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const cols = Math.ceil(vw / STEP);
    drops = Array.from({length: cols}, (_, i) => drops[i] !== undefined ? drops[i] : Math.random() * -80);
    drops.length = cols;
  }
  let last = 0;
  function drawMatrix(now){
    requestAnimationFrame(drawMatrix);
    if(document.hidden || now - last < 55) return;
    last = now;
    cx.fillStyle = "rgba(10,7,9,.14)";
    cx.fillRect(0, 0, vw, vh);
    cx.font = "13px 'JetBrains Mono', monospace";
    for(let i = 0; i < drops.length; i++){
      const y = drops[i] * STEP;
      if(y > 0){
        const ch = GLYPH[(Math.random() * GLYPH.length) | 0];
        cx.fillStyle = Math.random() < .06 ? "rgba(255,140,160,.55)" : "rgba(255,59,92,.26)";
        cx.fillText(ch, i * STEP, y);
      }
      drops[i] = y > vh && Math.random() > .975 ? Math.random() * -30 : drops[i] + 1;
    }
  }
  sizeMatrix();
  addEventListener("resize", sizeMatrix, {passive:true});
  requestAnimationFrame(drawMatrix);
}

const bootEl = document.getElementById("boot");
const BOOT = [
  ['<span class="hd">FORTRESS BIOS v2.6</span>  ::  initialising secure profile', 0],
  ['[<span class="ok">  OK  </span>] mounting /dev/portfolio', 180],
  ['[<span class="ok">  OK  </span>] loading module: vulnerability_research', 330],
  ['[<span class="ok">  OK  </span>] loading module: responsible_disclosure', 470],
  ['[<span class="warn"> WARN </span>] 0 unpatched assumptions found in scope', 620],
  ['[<span class="ok">  OK  </span>] verifying advisory signatures', 780],
  ['[<span class="ok">  OK  </span>] starting session for <span class="hd">root@fortress</span>', 950],
  ['<span class="t-dim">welcome, operator.</span>', 1150]
];
function endBoot(){
  if(bootEl.classList.contains("done")) return;
  bootEl.classList.add("done");
  bootEl.setAttribute("aria-hidden", "true");
  setTimeout(() => bootEl.remove(), 600);
  try{ sessionStorage.setItem("fortress-booted", "1"); }catch(err){}
}
let booted = false;
try{ booted = sessionStorage.getItem("fortress-booted") === "1"; }catch(err){}
if(booted || reduceMotion){
  bootEl.remove();
}else{
  const lines = document.getElementById("bootLines");
  BOOT.forEach(([html, delay]) => {
    setTimeout(() => {
      const el = document.createElement("span");
      el.className = "bl";
      el.innerHTML = html;
      lines.appendChild(el);
    }, delay);
  });
  setTimeout(endBoot, 1700);
  document.getElementById("bootSkip").addEventListener("click", endBoot);
}

const avFrame = document.getElementById("avFrame");
const avImgs = [...avFrame.querySelectorAll(".av-img")];
const avDots = document.getElementById("avDots");
const avCap = document.getElementById("avCap");
const avIdxEl = document.getElementById("avIdx");
document.getElementById("avTotal").textContent = String(avImgs.length).padStart(2, "0");
let avI = 0, avTimer = null;

avImgs.forEach((_, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.setAttribute("aria-label", "Ảnh " + (i + 1));
  b.addEventListener("click", () => { showAvatar(i); startAvatar(); });
  avDots.appendChild(b);
});

function showAvatar(i){
  avI = (i + avImgs.length) % avImgs.length;
  avImgs.forEach((im, k) => im.classList.toggle("on", k === avI));
  [...avDots.children].forEach((d, k) => d.setAttribute("aria-current", String(k === avI)));
  avIdxEl.textContent = String(avI + 1).padStart(2, "0");
  avCap.textContent = t("av.cap" + (avI + 1));
  if(!reduceMotion){
    avFrame.classList.remove("glitching");
    void avFrame.offsetWidth;
    avFrame.classList.add("glitching");
  }
}
function startAvatar(){
  clearInterval(avTimer);
  if(!reduceMotion) avTimer = setInterval(() => showAvatar(avI + 1), 5200);
}
showAvatar(0);
startAvatar();

const termOut = document.getElementById("termOut");
const termBody = document.getElementById("termBody");
const termEcho = document.getElementById("termEcho");
const termInput = document.getElementById("termInput");
const termHint = document.getElementById("termHint");
const CMDS = ["help", "whoami", "findings", "cve", "writeup", "contact", "banner", "clear"];
const HINTS = ["help", "whoami", "findings", "contact"];
let history = [], histI = -1;

function esc(s){
  return String(s).replace(/[&<>]/g, c => ({"&":"&amp;", "<":"&lt;", ">":"&gt;"}[c]));
}
function termPrint(html, cls){
  const el = document.createElement("span");
  el.className = "ln" + (cls ? " " + cls : "");
  el.innerHTML = html;
  termOut.appendChild(el);
  termBody.scrollTop = termBody.scrollHeight;
}
function termPair(k, v, pad){
  return '<span class="t-green">[+]</span> <span class="t-dim">' + esc(k).padEnd(pad, " ").replace(/ /g, "&nbsp;") +
         ' :</span> <span class="t-txt">' + esc(v) + "</span>";
}
function termBanner(){
  termPrint('<span class="t-red">$</span> <span class="t-txt">./recon --target fortress</span>');
  termPrint("[*] " + statCounts.find + " findings · " + statCounts.cve + " CVEs · " +
            statCounts.advisory + " advisory · " + statCounts.bounty + " bounty · " +
            statCounts.pkg + " projects · " + statCounts.cwe + " CWE classes", "t-dim");
  termPrint(t("term.welcome"), "t-dim");
}
function termRun(raw){
  const line = raw.trim();
  termPrint('<span class="t-red">$</span> <span class="t-txt">' + esc(line) + "</span>");
  if(!line) return;
  history.unshift(line); histI = -1;
  const [cmd, ...rest] = line.toLowerCase().split(/\s+/);

  if(cmd === "clear"){ termOut.innerHTML = ""; return; }
  if(cmd === "banner"){ termBanner(); return; }
  if(cmd === "help"){
    termPrint(t("term.help"), "t-gold");
    t("term.helpList").forEach(([c, d]) => {
      termPrint('<span class="t-txt">' + c.padEnd(9, " ").replace(/ /g, "&nbsp;") + '</span><span class="t-dim">' + esc(d) + "</span>");
    });
    return;
  }
  if(cmd === "whoami"){
    t("term.whoami").forEach(([k, v]) => termPrint(termPair(k, v, 9)));
    return;
  }
  if(cmd === "findings" || cmd === "cve" || cmd === "ls"){
    termPrint(t("term.cveHead"), "t-gold");
    document.querySelectorAll("#cve .cve").forEach(c => {
      const id = c.querySelector(".cve-id").textContent.trim();
      const pkg = c.querySelector(".pkg").textContent.trim();
      const sev = c.querySelector(".sev-label").textContent.trim();
      const val = c.querySelector(".ring .val").textContent.trim();
      // ID của CVE và của bug bounty đã tự nói lên loại, chỉ advisory mới cần nhãn.
      let tag = "";
      if(c.dataset.kind === "advisory") tag = ' <span class="t-dim">[no cve]</span>';
      termPrint('<span class="t-green">[+]</span> <span class="t-txt">' + esc(id) + '</span>' + tag + ' <span class="t-gold">' +
                esc(val) + " " + esc(sev) + '</span> <span class="t-dim">' + esc(pkg) + "</span>");
    });
    termPrint(t("term.cveTail"), "t-dim");
    return;
  }
  if(cmd === "writeup"){
    termPrint(t("term.goWriteup"), "t-dim");
    setTimeout(() => { location.hash = "#/writeup"; }, 500);
    return;
  }
  if(cmd === "contact"){
    termPrint(t("term.contact"), "t-gold");
    termPrint(termPair("email", "vophuvinh15012007@gmail.com", 7));
    termPrint(termPair("github", "github.com/fortress07", 7));
    termPrint(termPair("fb", "facebook.com/f0r7r355", 7));
    return;
  }
  termPrint('<span class="t-red">' + esc(cmd) + ":</span> " + t("term.notfound"), "t-dim");
}

termInput.addEventListener("input", () => { termEcho.textContent = termInput.value; });
termInput.addEventListener("keydown", e => {
  if(e.key === "Enter"){
    termRun(termInput.value);
    termInput.value = ""; termEcho.textContent = "";
  }else if(e.key === "ArrowUp"){
    e.preventDefault();
    if(histI + 1 < history.length){ histI++; termInput.value = history[histI]; termEcho.textContent = termInput.value; }
  }else if(e.key === "ArrowDown"){
    e.preventDefault();
    histI = Math.max(histI - 1, -1);
    termInput.value = histI < 0 ? "" : history[histI];
    termEcho.textContent = termInput.value;
  }else if(e.key === "Tab"){
    e.preventDefault();
    const hit = CMDS.find(c => c.startsWith(termInput.value.toLowerCase()) && termInput.value);
    if(hit){ termInput.value = hit; termEcho.textContent = hit; }
  }
});
termBody.addEventListener("click", () => termInput.focus());
function buildHints(){
  termHint.innerHTML = "";
  const label = document.createElement("span");
  label.style.cssText = "font-family:var(--mono);font-size:.63rem;color:var(--muted);align-self:center";
  label.textContent = t("term.hint");
  termHint.appendChild(label);
  HINTS.forEach(c => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = c;
    b.addEventListener("click", () => { termRun(c); termInput.focus(); });
    termHint.appendChild(b);
  });
}

const nav = document.getElementById("nav");
const progress = document.getElementById("progress");
const links = [...navLinks.querySelectorAll("a")];
const blob1 = document.getElementById("blob1");
const blob2 = document.getElementById("blob2");
let ticking = false;

function onScroll(){
  const y = scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
  nav.classList.toggle("scrolled", y > 20);
  toTop.classList.toggle("show", y > 480);
  blob1.style.transform = "translate3d(0," + (y * 0.16) + "px,0)";
  blob2.style.transform = "translate3d(0," + (y * -0.1) + "px,0)";
  ticking = false;
}
addEventListener("scroll", () => {
  if(!ticking){ requestAnimationFrame(onScroll); ticking = true; }
}, {passive:true});

toTop.addEventListener("click", () => scrollTo({top:0, behavior:"smooth"}));

// Nút trong hero cuộn xuống mục bản tin thay vì đổi trang.
document.querySelectorAll("[data-scroll]").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.getElementById(a.dataset.scroll);
    if(target) target.scrollIntoView({behavior: reduceMotion ? "auto" : "smooth"});
  });
});

function route(){
  const name = location.hash.replace(/^#\/?/, "") || "home";
  const key = document.getElementById("page-" + name) ? name : "home";
  // Trang chi tiết (#/wu-xxxxx) vẫn sáng mục "Writeup" trên thanh điều hướng.
  const navKey = key.startsWith("wu-") ? "writeup" : key;
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === "page-" + key));
  links.forEach(l => l.classList.toggle("active", l.dataset.route === navKey));
  // Reveal lại các phần tử của trang vừa mở (IntersectionObserver đã unobserve chúng).
  document.querySelectorAll(".page.active .reveal, .page.active h2").forEach(el => el.classList.add("show"));
  document.querySelectorAll(".page.active [data-count]").forEach(runCounter);
  document.querySelectorAll(".page.active .ring").forEach(r => r.style.setProperty("--p", r.dataset.p));
  document.querySelectorAll(".page.active").forEach(showBars);
  scrollTo(0, 0);
}
addEventListener("hashchange", route);

applyLang();
route();
onScroll();
